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