# PugJS - SASS - Gulp project

A simple configuration project with PugJS and SASS.

## Getting Started

Wanted to start a project with PugJS and SASS? Here's a scaffold of the project integrating Gulp as the build system.

### Prerequisites

You must have **npm**, **gulp** and **pug** install on your computer.

**On Mac**

```
$ gem install sass && npm install -g pug 
```

### Installing

To install the building dependencies

```
$ npm install
```

And then, to build the project. It will automatically create a production folder (**/dist**) with minified index.html and styles.min.css

```
$ gulp build
```

You can also watch your .pug and .scss files:

```
$ gulp watch
```

And now, you're ready to go. Just launch **dist/index.html** in any browser, you don't need any local server.

## Generate a pug template with it's own style

```
$ python create.py <component-name>
```

It will generate a partial sass files in **/src/sass/includes/** and import it directly into **/src/sass/styles.scss**. Also it will create a pug file in **/src/views/includes/** that you can include in your **index.pug** wherever you want it in the page.

## Project Structure

```
pugjs-sass/
|-- nodes_modules/		* Node dependencies: Gulp & its plugins
|
|-- dist/			* Production folder: HTML & CSS files minified. [Optional] Public files: Images & Fonts.
|	├── index.html		* HTML Page
|	├── styles.min.css		* Main stylesheet minified
|	├── styles.min.css.map		* Source Maps of styles.min.css 
|
|-- src/			* Development folder: SASS/CSS files, JS files & PHP files
|	├── sass/
|	|	├── general/
|	|	├── includes/
|	|	├── styles.scss
|	├── views/
|	|	├── general/
|	|	├── includes/
|	|	├── index.pug
|
├── .gitignore              	* Git Ignore file: bower_components, nodes_modules & vendor
├── .htaccess.txt           	* Content of .htaccess file to put on Apache Web server. *Rename it to .htaccess*
├── abovethefold-script.py  	* Python script to build Above the fold content - Use in Gulp script
├── css-script.py           	* Python script to replace z-index problem when SASS is building - Use in Gulp script
├── bower.json			* Description file for Bower dependencies
├── composer.json           	* Description file for Composer dependencies
├── package.json            	* Description file for Node dependencies
├── gulpfile.js			* Gulp script to build the prod version
├── README.md			* Documentation file
```

## Upcoming

* Simple template integration
* Tutorial: 'How to deploy a static website with Netlify?'
* A demo website deployed
* _[optionnal]_ Local server to allow hot reload

## Built With

* [PugJS](https://pugjs.org) -  Robust, elegant, feature rich template engine
* [Sass](http://sass-lang.com/) - Sass makes CSS fun again.
* [Gulp](https://gulpjs.com) - The streaming build system

## Author

**Antoine Rakotozafy** - [Website](https://arakotozafy.me)

## License

This project is licensed under the MIT License.