Udactiy Front-End Web Developer Nanodegree
===============================

## Project - Restaurant Reviews


### Table of Contents

* [Description](#Description)
* [Getting Started](#Getting+Started)
* [Local Developmentt](#Local+Development)
* [Dependencies](#Dependencies)
* [Resources](#Resources)

### Description

* The Udacity's Restaurant Reviews Project demonstrates a Student's mastery of Responsive Web Design, Web Accessibility, Service Workers, and Progressive Web Application development.
* The Student is provided with a starter project containing some HTML, CSS and JavaScripts files.
* The Student is responsible for converting a static website design to be responsive on different sized displays and accessible for screen reader use. Also, converting the static website to be a Progressive Web Application by caching some assets for offline use.

## Getting Started
1. [Download](https://github.com/jamesperrin/udacity-fend-restaurant-review/archive/master.zip) the files to your computer.
2. [Clone](https://github.com/jamesperrin/udacity-fend-restaurant-review.git) the repository on your computer.
    * > `git clone https://github.com/jamesperrin/udacity-fend-restaurant-review.git`

## Local Development

### Python
1. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software. You can also use a package manager to install.
2. In a terminal, check the version of Python you have:
    ```
    python -V
    ```
3. 
    - Python 2.x users, spin up the server with the following command:
        ```
        python -m SimpleHTTPServer 8000
        ```
    - For Python 3.x, you can use: 
        ```
        python3 -m http.server 8000
        ```
4. In your browser, go to `http://localhost:8000`.
> Note: You can use an alternate port if `8000` is already in use.

### Node
1. `Node.js` runtime environment needs to be installed on your computer. Please install by either going to the [site](https://nodejs.org/en/) or by using a package manager, `npm` is included in the install.
2. A `package.json` file is include to facilitate serving the webpage. To install the `http-serve` module use the following command:
    ```
    npm install
    ```
3. After the installation is complete, use the following command to serve up the site.
    ```
    npm start
    ```
4. Navigate to `http://localhost:8000` in your browser. 
> Note 1: If you have `http-server` installed globally you can serve the site without using `npm install` first or by using the following command in the project directory.
> ```
> http-server ./
> ```
> Note 2: To use another port use the command:
> ```
> http server ./ -p <port #>
> ```

### Dependencies
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [leefletjs](https://leafletjs.com/)
* [Mapbox](https://www.mapbox.com/install/)
* [Python](https://www.python.org//)
* [Node](https://nodejs.org)

### Resources

* [Udacity Starter Project](https://github.com/udacity/mws-restaurant-stage-1)