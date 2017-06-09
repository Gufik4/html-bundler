# html-bundler
tool written in node.js to easy handle single pages with complex index.html
this simple solution is to handle single problem

#### licence: feel free to use, modify and share
#### add a star if you like it

# problem which this tool solves
#### you develop complex page without server-side rendering with template engine where is only index.html on front-end side
#### you can't split index.html into logical sections and put it into separate files

# now you can - just have to follow these simple rules

## Prepare project:
#### 1. download & install node.js (https://nodejs.org/en/download/)
#### 2. download/copy from this repository
#### 3. make directory "project"
##### 3a. "project" is for logical sections in separate files
##### 3b. if name of .html file in "project" directory have "body" - this file alphabeticly goes into <body>
##### 3c. if name of .html file in "project" directory have "head" - this file alphabeticly goes into <head>
##### 3d. if name of .html file in "project" directory have "script" - this file alphabeticly goes into bottom of <body> (some script have to be loaded here)
#### 4. open Terminal.app (MacOs) or Command/Bash (Windows/Unix) & go to project root
#### 5. run command "node html-bundler" or "npm run build"
#### 6. Done

###### to customize index.html or paths edit pattern in html-bundler.js
###### author: Przemek Jóźwiakowski, Value Point

