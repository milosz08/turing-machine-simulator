# Turing machine simulator

[[Docker image](https://hub.docker.com/r/milosz08/turing-machine-simulator-app)] |
[[About project](https://miloszgilga.pl/project/turing-machine-simulator)]

An advanced, single-tape, deterministic Turing Machine simulator written using the ReactJS library. Available in light
and dark modes, depending on user preference. This machine is a great foundation for understanding how computer
processing of algorithms works, found frequently in Computer Science majors at technical colleges.

## Table of content

- [Clone script](#clone-script)
- [Webpack scripts](#webpack-scripts)
- [Run from Docker container](#run-from-docker-container)
- [Syntax and compiler](#syntax-and-compiler)
- [Tech stack](#tech-stack)
- [Author](#author)
- [License](#license)

## Clone script

To install the program on your computer use the command (or use the built-in GIT system in your IDE environment):

```
$ git clone https://github.com/milosz08/turing-machine-simulator
```

## Webpack scripts

1. Install dependencies via:

```bash
$ yarn install --frozen-lockfile
```

> [!TIP]
> If you don't have yarn, install it via `npm i -g yarn`.

2. To run webpack dev server, type:

```
$ yarn run serve
```

Development server should be available at [9091](http://localhost:9091) TCP port.

3. To run webpack highly optimized production build, type:

```
$ yarn run build
```

Custom webpack configuration you will find in `.webpack` directory.

## Run from docker container

To start application from Docker container, type:

```bash
$ docker compose up -d
```

This command should create followed containers:

| Container name               | Port                          | Description                      |
|------------------------------|-------------------------------|----------------------------------|
| turing-machine-simulator-app | [9091](http://localhost:9091) | Caddy server (React application) |

## Syntax and compiler

This simulator has a syntax taken from @awmorp, slightly modified by me for ease of use. Machine has a code compiler I
designed that will not allow the algorithm to run if there are any syntax errors.

## Tech stack

* React 18, React Router 6,
* Typescript,
* Webpack 5,
* Styled components,
* Redux toolkit.

## Author

Created by Miłosz Gilga. If you have any questions about this application, send message:
[miloszgilga@gmail.com](mailto:miloszgilga@gmail.com).

## License

This application is on Apache 2.0 License.
