# Turing machine simulator
[![Generic badge](https://img.shields.io/badge/Made%20with-React%2017.0.2-1abc9c.svg)](https://jakarta.ee/release/10/)&nbsp;&nbsp;
[![Generic badge](https://img.shields.io/badge/Build%20with-Create%20React%20App-green.svg)](https://gradle.org/)&nbsp;&nbsp;
<br>
> More info about this project you will find [on my personal website](https://miloszgilga.pl/project/turing-machine-simulator)
> <br>
> See project demo at [turing.miloszgilga.pl](https://turing.miloszgilga.pl)

An advanced, single-tape, deterministic Turing Machine simulator written using the React library. Available in light 
and dark modes, depending on user preference. This machine is a great foundation for understanding how computer 
processing of algorithms works, found frequently in Computer Science majors at technical universities.

## Table of content
* [Clone script](#clone-script)
* [Motivation](#motivation)
* [Syntax and Compiler](#syntax-and-compiler)
* [Build and run](#build-and-run)
* [Tech stack](#tech-stack)
* [Author](#author)
* [Project status](#project-status)
* [License](#license)

<a name="clone-script"></a>
## Clone script
To install the program on your computer use the command (or use the built-in GIT system in your IDE environment):
```
$ git clone https://github.com/Milosz08/turing-machine-simulator
```
<a name="motivation"></a>
## Motivation
I decided to create this simulator mainly for teaching purposes (mine and others). I believe it can be useful to more 
than one Computer Science student. I decided to use ReactJS library because of its speed and modularity, thanks to which 
everything is arranged in separate modules, so to speak, the simulator logic is separated from the view layer. I decided 
not to create an API and database, and instead add functionality to read from a file and write to a file.

<a name="syntax-and-compiler"></a>
## Syntax and compiler
This simulator has a syntax taken from @awmorp, slightly modified by me for ease of use. Machine has a code compiler 
I designed that will not allow the algorithm to run if there are any syntax errors.

<a name="build-and-run"></a>
## Build and run
Before, install all necessary dependencies via:
```
$ npm install
```
- To create production minified build, run:
```
$ npm run build
```
- To run development server, type and execute:
```
$ npm run start
```

<a name="tech-stack"></a>
## Tech stack
* React
* Typescript
* Styled Components
* Redux (flux store implementation in React)

<a name="author"></a>
## Author
Created by Miłosz Gilga. If you have any questions about this application, send message: [personal@miloszgilga.pl](mailto:personal@miloszgilga.pl).

<a name="project-status"></a>
## Project status
Project is finished.

<a name="license"></a>
## License
This application is on Apache 2.0 License.
