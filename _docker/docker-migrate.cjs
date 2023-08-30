'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: docker-migrate.cjs
 *   Created at: 2023-08-05, 14:22:43
 *   Last updated at: 2023-08-30, 17:41:17
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

const path = require('path');
const { Spinner } = require('cli-spinner');
const commandLineArgs = require('command-line-args');
const { spawn, exec } = require('promisify-child-process');

const { restart } = parseArgs([{ name: 'restart', alias: 'r', type: Boolean }]);

const targetDirectory = path.resolve(__dirname, '..');
const containerName = 'turing-machine-simulator';
const allStages = restart ? 5 : 4;
let currentStage = 1;

function parseArgs(args) {
  const parsedOnErrorArgs = args.map(arg => `--${arg.name}`).join(', ');
  try {
    return commandLineArgs(args);
  } catch (err) {
    console.log(`Script takes arguments: ${parsedOnErrorArgs}.`);
    process.exit(1);
  }
}

function printSuccessMessage(spinner, message) {
  spinner.stop(true);
  console.log(
    `\u2713 [${currentStage++}/${allStages}] Successfully ${message}.`
  );
}

function printErrorMessage(spinner, message) {
  spinner.stop(true);
  console.log(`X [${currentStage}/${allStages}] Failure ${message}.`);
}

function createSpinnerAndStart(message) {
  const spinner = new Spinner(
    `%s [${currentStage}/${allStages}] ${message}...`
  );
  spinner.start();
  return spinner;
}

async function restartApacheWebServer() {
  const endMessage = 'restarted ApacheWeb server';
  const spinner = createSpinnerAndStart('Restarting ApacheWeb server');
  try {
    await exec(`docker exec ${containerName} apachectl restart`);
    printSuccessMessage(spinner, endMessage);
  } catch (err) {
    printErrorMessage(spinner, endMessage);
    throw new Error(err);
  }
}

async function checkIfDockerContainerIsRunning() {
  const endFailureMessage = `Container "${containerName}" is not running`;
  const spinner = createSpinnerAndStart('Checking, if container is running');
  try {
    const { stdout, stderr } = await exec(
      `docker inspect --format="{{ .State.Running }}" "${containerName}"`
    );
    const parsed = JSON.parse(stdout.replaceAll(/\n/g, ''));
    if (!parsed) {
      throw new Error(stderr || endFailureMessage);
    }
    printSuccessMessage(
      spinner,
      'checked container running state. Container is running'
    );
  } catch (err) {
    printErrorMessage(
      spinner,
      'checked container running state. Container not running'
    );
    throw new Error(err);
  }
}

async function createPromisifyProcess({
  execCommand,
  messOnStart,
  messOnEnd,
  options,
}) {
  const command = process.platform === 'win32' ? 'cmd' : 'bash';
  const args = [process.platform === 'win32' ? '/c' : '-c', execCommand];
  const spinner = createSpinnerAndStart(messOnStart);
  try {
    await spawn(command, args, options || {});
    printSuccessMessage(spinner, messOnEnd);
  } catch (err) {
    printErrorMessage(spinner, messOnEnd);
    throw new Error(err);
  }
}

async function processing() {
  try {
    await checkIfDockerContainerIsRunning();
    await createPromisifyProcess({
      execCommand: 'yarn run build',
      messOnStart: 'Compiling webpack bundles',
      messOnEnd: 'compiled webpack bundles',
      options: { cwd: targetDirectory },
    });
    await createPromisifyProcess({
      execCommand: `docker exec ${containerName} rm -rf /var/www/html/`,
      messOnStart: 'Clear docker container /var/www/html directory',
      messOnEnd: 'cleared docker container /var/www/html directory',
    });
    await createPromisifyProcess({
      execCommand: `docker cp ${targetDirectory} ${containerName}:/var/www/html/`,
      messOnStart: 'Migrate static content into docker container',
      messOnEnd: 'migrated static content into docker container',
    });
    if (restart) {
      await restartApacheWebServer();
    }
  } catch (err) {
    process.exit(1);
  }
}

processing().then(() => {
  console.log(`\nMigrated ${containerName} into docker container.`);
});
