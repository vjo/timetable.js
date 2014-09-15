module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build/'],
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
                    compass: true,
                    style: 'compressed'
                },
                files: {
                    'build/<%= pkg.name %>.min.css': 'src/sass/main.scss'
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
        autoprefixer: {
            options: {
                browsers: ['last 4 version']
            },
            dist: {
                files: {
                    'build/<%= pkg.name %>.min.css': 'build/<%= pkg.name %>.min.css'
                }
            }
        },
        watch: {
            css: {
                files: 'src/sass/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', [
        'clean',
        'sass',
        'autoprefixer',
        'jshint',
        'uglify'
    ]);
    grunt.registerTask('dev', ['watch']);
};
