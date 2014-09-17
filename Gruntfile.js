'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'bastrap3/bastrap.css': 'bastrap3/bastrap.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            options: {
                livereload: true
            }
        },
        cssmin: {
            css:{
                src: 'css/base.css',
                dest: 'css/base.min.css'
            }
        }

    });


    //Register modules to user    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['cssmin']);
};