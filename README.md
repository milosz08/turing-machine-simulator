<h1 align="center">
  Turing Machine Simulator
  <br>
  <img src="https://raw.githubusercontent.com/Milosz08/ReactJS_Turing_Machine_Simulator/master/img/main-logo.png" width="200">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">
  An advanced, single-tape, deterministic Turing Machine simulator written using the ReactJS library. Available in light and dark modes, depending on user preference. This machine is a great foundation for understanding how computer processing of algorithms works, found frequently in Computer Science majors at technical colleges.
</p>

> See how it works at [turing.miloszgilga.pl](http://turing.miloszgilga.pl/) <br>

<hr/>

## About the Project
I decided to create this simulator mainly for teaching purposes (mine and others). I believe it can be useful to more than one Computer Science student. I decided to use ReactJS library because of its speed and modularity, thanks to which everything is arranged in separate modules, so to speak, the simulator logic is separated from the view layer. I decided not to create an API and database, and instead add functionality to read from a file and write to a file.

## Syntax and Compiler
This simulator has a syntax taken from @awmorp, slightly modified by me for ease of use. Machine has a code compiler I designed that will not allow the algorithm to run if there are any syntax errors.

## Light/Dark mode save in Local Storage
This app has a light mode and a dark mode. When the user selects a mode, it will be saved in local storage so that when the user revisits the page, the mode will automatically switch to dark or light.

<hr/>

## Screenshot gallery

<img src="https://raw.githubusercontent.com/Milosz08/ReactJS_Turing_Machine_Simulator/master/img/black_white_bg.png" width="1920">

## Clone and Installation
If you want to clone and work with this repository, use the built-in interface in your IDE (for example WebStorm or Visual Studio Code) or use the clone project algorithm with git bash:<br>
1. Open Git Bash.
2. Change the current working directory to the location where you want the cloned directory.
3. Type `git clone` and then paste the URL you copied earlier.
  
```
$ git clone https://github.com/Milosz08/ReactJS_Turing_Machine_Simulator
```

> This project has quite a few dependencies that need to be installed using NPM before cloning the repository. List of all necessary dependencies below.

## Dependencies
All packages with dependencies used in the project can be found in the `package.json`. In addition, in each component I have included information about what packages I use and version of this packages.

## License
This application is on MIT License [terms of use](https://en.wikipedia.org/wiki/MIT_License).
