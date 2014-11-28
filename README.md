# Project Name
* [Production Site][prod]
* [Client Facing Beta Site][stage]
* [QA Site][QA]
* [Dev Site][dev]

## Project Purpose
Every project has a raison d'etre.

## Project Dependencies
* [Node.js][node]
    - [Node Package Manger (npm)][npm]
* [Qunit][qunit]
* [Ruby][ruby]
    - [Windows Installer][winruby]
    - [OS X Homebrew Installer][osxruby]
    - [SASS][] & [compass][]

## Getting Set up
### You'll need:
* Internet Connection to download dependencies
* Text Editor or IDE of choice
    - We recommend one of the following:
    * [Sublime Text 2][ST2] or [3][ST3]
    * [Brackets][]
    * [Vim][]
* Potentially, the ability to install applications as administrator  
  
This project is an HTML / JS / SASS application, built using [Grunt][] on 
[Nodejs][node]. We use Grunt to ask Ruby to compile our SASS, and to have Node 
run Qunit unit tests, automated through PhantomJS. We use Ruby to run the SASS 
on the back end, so once you get Compass (SASS's running mate) installed, 
Grunt and Node will forever do the gruntwork for you.  

It's just a matter of getting you up and running.

### Let's do this...
#### Windows
##### Downloading the project source
###### SVN
###### Git

##### Installing [Ruby][]
This should be relatively straightforward, as it's just a matter of downloading
and running the [installer][ruby].  You may need to run this as an administrator.
  
To get going with Ruby you'll need to use the command line, which is often an 
unfamiliar and scary place for windows users. But there's no better way to get 
over it than to dive right in. Go ahead and press...

###### Win XP & 7
    [Windows Key]+[R]
    Enter at the prompt:
        cmd /k
    Press [Enter]

###### Win 8
    [Windows Key]+[X]
    Select "Command Prompt"

    Welcome to the Windows Command Prompt!
You can list the current directories with either:
    dir
or
    ls
You can change directories with:
    cd directoryName
If you have spaces in the directory name, you can write the whole path name 
like so:
    cd "C:\Users\myname\My Documents"
Very often, when writing path names, you can use something called 
Tab Completion. This means that you can hit the `[Tab]` key after typing the 
first few characters of a directory or file name, and the command prompt will 
complete the name for you. This makes it significantly easier to 
type long path names.

##### Installing Compass & SASS
The Ruby command prompt is often the same as the Windows command prompt. You may
have a specific Ruby command prompt installed in your Applications folder, which
has the Ruby environment pre-loaded. For our purposes, now that Ruby is 
installed, the Windows command prompt should work fine.  
  
In the [Ruby command prompt][rubycmd] enter the following command:
    gem install sass
Double check that Sass is working properly, run:
    sass -v
  
Now let's install [Compass][]  
Run:  
    gem update --system
    gem install compass
At this point you shold be able to navigate to your project root directory and 
run:
    compass create --sass-dir 'sass' --css-dir 'css'
This should build the SASS directory into the CSS directory, but will give you a
bunch of extraneous files.
Let's make this happen automatically, using the grunt script.

##### Installing [Nodejs][node] and [NPM][]
We'll use Grunt on Node, so first we'll have to get [Node][] up and running.  
Download and run [the installer][nodedl]. This installer includes 
Node Package Manager, also known as npm. This installer should also have come 
with a handy nodejs command prompt. [If not, you'll need to ensure that
nodejs is added to your PATH.][nodeoldinstall]
  
#### MacOSX
##### Downloading the project source
###### SVN
###### Git
##### Installing Ruby

## How to build this project
Now we'll install the project. Open up the [nodejs command prompt][nodecmd]:
![Picture of Nodejs Start Menu options][]
and navigate to your project directory
    cd C:\path\to\your\project\root
Run
    npm install
This will install all the project dependencies, as defined by `packages.json`

### Running Grunt
Grunt should have been installed with the above steps, but if you wish to 
install it globally, you can run:
    npm install -g grunt-cli

In your project root, run:
    grunt

This will build the project, by running Gruntfile.js, using the Ruby Compass 
library, which is the most up-to-date, tried and true SASS solution. There are 
currently not many options enabled here. Future releases will build code and
source maps for development, as well as minify and precompile code for 
production.



[prod]:     http://www.example.com "Project Name"
[stage]:    http://stage.example.com "STAGE: Project Name"
[QA]:       http://qa.example.com "QA: Project Name"
[dev]:      http://dev.example.com "DEV: Project Name"

[node]:     http://nodejs.org
[nodedl]:   http://nodejs.org/download/
[npm]:      http://npmjs.org
[nodecmd]:  http://www.altifysoftware.com/developing-node-js-in-windows/#attachment_351
[nodestartmenu]:  http://www.altifysoftware.com/wp-content/uploads/2014/06/NodeStart-Menu.png
[nodeoldinstall]: http://www.hacksparrow.com/install-node-js-and-npm-on-windows.html
[qunit]:    http://qunitjs.com/intro

[ruby]:     https://www.ruby-lang.org/en/
[so-ruby]:  http://stackoverflow.com
[winruby]:  https://www.ruby-lang.org/en/installation/#rubyinstaller
[rubycmd]:  http://rubyonwindowsguides.github.io/book/ch01-01.html
[osxruby]:  https://www.ruby-lang.org/en/installation/#homebrew

[sass]:     http://sass-lang.com/install
[compass]:  http://compass-style.org/install/
