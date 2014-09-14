module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/<%= pkg.name %>.min.css': 'src/css/<%= pkg.name %>.scss'
                }
            }
        },
        jshint: {
            all: {
                src: 'src/js/*.js',
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    '.jshintrc',
                    'Gruntfile.js',
                    'src/**/*.js',
                    '.jshint'
                ],
                tasks: ['jshint'],
                options: {
                    interrupt: true,
                },
            },
        }
    });
    //grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [
        //'clean',
        'jshint',
        'uglify',
        'sass'
    ]);
};
