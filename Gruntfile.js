var GRUNT_SDK = require('./sdk/main.js');
module.exports = function (grunt) {
    var EXTERNAL_LIBS = ['node_modules/angular/angular.js'];
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'jsbeautifier': {
            files: ['src/**/*.js'],
            options: {
                js: {
                    indentSize: 4
                },
                html: {
                    indentSize: 4
                }
            }
        },
        clean: ["dist", ".tmp"],
        copy: {
            html: {
                expand: true,
                flatten: true,
                src: 'src/*.html',
                dest: 'dist/'
            },
            assets: {
                expand: true,
                cwd: 'src',
                src: ['assets/**'],
                dest: 'dist/'
            },
            data: {
                expand: true,
                cwd: 'src',
                src: ['data/**'],
                dest: 'dist/'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: false,
                newcap: true,
                noarg: true,
                sub: true,
                undef: false,
                boss: true,
                eqnull: true,
                node: true,
                globals: {
                    exports: true,
                    module: false
                }
            },
            all: ['src/**/*.js', 'test/**/*.js']
        },
        browserify: {
            dist: {
                files: {
                    '.tmp/app-js': ['src/scripts/app.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [EXTERNAL_LIBS, '.tmp/app-js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= grunt.config("concat").dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        }
    });
    GRUNT_SDK.loadNodeModulesGruntTask(grunt);
    // Default task(s).
    grunt.registerTask('default', ['clean','jsbeautifier', 'jshint', "browserify", 'copy:html','copy:assets','copy:data','concat']);//, 'uglify']);

};