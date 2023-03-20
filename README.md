<img align="right" src="https://raw.githubusercontent.com/Milosz08/ReactJS_Turing_Machine_Simulator/master/img/main-logo.png" height="160">

# Turing Machine Simulator
[![Generic badge](https://img.shields.io/badge/Made%20with-React%2017.0.2-1abc9c.svg)](https://react.dev/)&nbsp;&nbsp;
[![Generic badge](https://img.shields.io/badge/Store%20provider-Redux-green.svg)](https://gradle.org/)&nbsp;&nbsp;

An advanced, single-tape, deterministic Turing Machine simulator written using the React library. Available light and dark mode, depending on user preference. This machine is a great foundation for understanding how computer processing of algorithms works, found frequently in Computer Science majors at technical colleges.
<br>

> See how it works at [turing.miloszgilga.pl](http://turing.miloszgilga.pl/) <br>

## Table of content
* [Clone and install](#clone-and-install)
* [Prepare runtime configuration](#prepare-runtime-configuration)
* [About the project](#about-the-project)
* [Screenshot gallery](#screenshot-gallery)
* [Author](#author)
* [Project status](#project-status)
* [License](#license)

<a name="clone-and-install"></a>
## Clone and install

To install the program on your computer, use the command below (or use the build-in GIT system in your IDE environment):
```
$ git clone https://github.com/Milosz08/SUoT_Turing_Machine_Simulator turing-machine-simulator
```

<a name="prepare-runtime-configuration"></a>
## Prepare runtime configuration
1. Install all dependencies via:
```
$ npm install
```
2. Run in development environment via:
```
$ npm run
```
<a name="about-the-project"></a>
## About the Project
I decided to create this simulator mainly for teaching purposes (mine and others). I believe it can be useful to more than one Computer Science student. I decided to use React library because it's fast and modular. I decided not to create an API and database, and instead of this, add functionality to read/write to txt file. To manage the state of this application I decided to use Redux library, because it's fast and predictable. This library manages the state of this machine, making it easy to debug if an error/s is/are encountered.

## Syntax and Compiler
This simulator has a syntax taken from @awmorp, slightly modified by me for ease of use. Machine has a code compiler I designed that will not allow to run the algorithm if there are any syntax errors.

## Light/Dark mode save in Local Storage
This app has light and dark mode. When user selects mode, it will be saved in local storage so that when the user revisits the page, selected mode will automatically switch to dark or light.

<a name="screenshot-gallery"></a>
## Screenshot gallery
<img src="https://raw.githubusercontent.com/Milosz08/ReactJS_Turing_Machine_Simulator/master/img/black_white_bg.png" width="1920">

<a name="author"></a>
## Author
Created by Miłosz Gilga. If you have any questions about this application, send message: [personal@miloszgilga.pl](mailto:personal@miloszgilga.pl).

<a name="project-status"></a>
## Project status
Project is finished.

<a name="license"></a>
## License
This application is on Apache 2.0 license.<br>
Turing Machine Icon created by Attilio Baghino.
