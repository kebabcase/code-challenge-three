module.exports = function (grunt) {
  'use strict';

  var _ = require('lodash');
  var config = {};

  config.babel = {
    options: {
      sourceMap: false,
      presets: ['babel-preset-es2015']
    },
    dist: {
      files: [
        {
          expand: true,
          cwd: 'src/',
          src: [
            '**/*.js',
            '!**/*.min.js'
          ],
          dest: '.tmp/'
        }
      ]
    }
  };

  config.clean = {
    dist: ['client'],
    temp: ['.tmp']
  };

  config.concat = {
    options: {
      sourceMap: false
    },
    dist: {
      src: [
        '.tmp/redactor/*.js',
        '.tmp/services/**/*.js',
        '.tmp/navbar/navbar.js',
        '.tmp/app.js',
        '.tmp/templates.js',
        '.tmp/**/*.js',
        '!.tmp/**/*.min.js',
        '!.tmp/**/*.spec.js'
      ],
      dest: 'client/web-forum.js'
    }
  };

  config.copy = {
    dist: {
      files: [
        {
          src: ['./src/index.html'],
          dest: 'client/index.html'
        },
        {
          src: ['./bower.json'],
          dest: 'client/bower.json'
        },
        {
          src: ['./bower_components/**/*'],
          dest: 'client/'
        },
        {
          src: ['./README.md'],
          dest: 'client/README.md'
        },
        {
          src: ['./src/redactor/redactor.css'],
          dest: 'client/redactor/redactor.css'
        }
      ]
    }
  };

  config.cssmin = {
    dist: {
      files: {
        'client/web-forum.min.css': ['client/web-forum.css']
      }
    }
  };

  config.jshint = {
    all: {
      options: {
        jshintrc: true
      },
      src: [
        'gruntfile.js',
        'src/**/*.js',
        '!src/redactor/**/*.js',
        '!src/services/lbServices.js'
      ]
    }
  };

  config.ngAnnotate = {
    options: {
      singleQuotes: true
    },
    dist: {
      files: {
        'client/web-forum.js': ['client/web-forum.js']
      }
    }
  };

  config.ngtemplates = {
    dist: {
      cwd: 'src',
      src: ['**/*.tpl.html'],
      dest: '.tmp/templates.js',
      options: {
        module: 'webForum'
      }
    }
  };

  config.sass = {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        'client/web-forum.css': 'src/app.scss'
      }
    }
  };

  config.shell = {
    bower: {
      options: {
        stdout: true,
        stderr: true,
        failOnError: true
      },
      command: 'bower update'
    }
  };

  config.uglify = {
    dist: {
      files: {
        'client/web-forum.min.js': ['client/web-forum.js']
      }
    }
  };

  config.wiredep = {
    dev: {
      src: ['src/index.html'],
      exclude: [],
      devDependencies: true,
      fileTypes: {
        js: {
          block: /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
          detect: {
            js: /['"](.+js)['"]/gi,
            css: /['"](.+css)['"]/gi
          },
          replace: {
            js: '\'{{filePath}}\',',
            css: '\'{{filePath}}\','
          }
        }
      }
    }
  };

  require('load-grunt-tasks')(grunt);
  grunt.initConfig(config);

  grunt.registerTask('build:dev:js', [
    'babel',
    'ngtemplates',
    'concat:dist',
    'ngAnnotate'
  ]);

  grunt.registerTask('build:dev:css', [
    'sass',
    'cssmin'
  ]);

  grunt.registerTask('build:dev', [
    'wiredep',
    'build:dev:js',
    'build:dev:css',
    'clean:temp'
  ]);

  grunt.registerTask('build', [
    'shell:bower',
    'jshint',
    'clean',
    'copy:dist',
    'build:dev',
    'uglify'
  ]);

  grunt.registerTask('default', ['build']);
};
