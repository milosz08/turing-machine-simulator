# Turing machine simulator

![](https://img.shields.io/badge/Made%20in-React%20%2018-1abc9c.svg)
&nbsp;&nbsp;
![](https://img.shields.io/badge/Build%20with-Webpack%205-brown.svg)
&nbsp;&nbsp;
<br>
> More info about this project you will find [on my personal website](https://miloszgilga.pl/project/turing-machine-simulator)
> <br>
> See live demo at [turing.miloszgilga.pl](https://turing.miloszgilga.pl)

An advanced, single-tape, deterministic Turing Machine simulator written using the ReactJS library. Available in light
and dark modes, depending on user preference. This machine is a great foundation for understanding how computer processing
of algorithms works, found frequently in Computer Science majors at technical colleges.

## Table of content
* [Clone script](#clone-script)
* [Webpack scripts](#webpack-scripts)
* [Run with Docker containers](#run-with-docker-containers)
* [Syntax and compiler](#syntax-and-compiler)
* [Tech stack](#tech-stack)
* [Author](#author)
* [Project status](#project-status)
* [License](#license)

<a name="clone-script"></a>
## Clone script
To install the program on your computer use the command (or use the built-in GIT system in your IDE environment):
```
$ git clone https://github.com/Milosz08/tpr-fpr-calculator
```

<a name="webpack-scripts"></a>
## Webpack scripts
* To run webpack dev server, type:
```
$ yarn run serve
```
* To run webpack highly optimized production build, type:
```
$ yarn run build
```
Custom webpack configuration you will find in `_webpack` directory.

<a name="run-with-docker-containers"></a>
## Run with Docker containers
* To compose image, type (detached with `-d` flag):
```
$ docker-compose up -d
```
* To build and migrate changed content to docker container, type:
```
$ yarn run migrate
```
* To build and migrate changed content to docker container with restart Apache Web Server, type:
```
$ yarn run migrate:restart
```
> NOTE: Docker container must be running.

<a name="syntax-and-compiler"></a>
## Syntax and compiler
This simulator has a syntax taken from @awmorp, slightly modified by me for ease of use. Machine has a code compiler I 
designed that will not allow the algorithm to run if there are any syntax errors.

<a name="tech-stack"></a>
## Tech stack
* React 18
* React DOM 18
* React Router 6
* Webpack 5
* Styled components
* Redux toolkit

<a name="author"></a>
## Author
Created by Miłosz Gilga. If you have any questions about this application, send message:
[personal@miloszgilga.pl](mailto:personal@miloszgilga.pl).

<a name="project-status"></a>
## Project status
Project is finished.

<a name="license"></a>
## License
This application is on Apache 2.0 License.
