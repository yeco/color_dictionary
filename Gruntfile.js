'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project settings
        config: {
            // Configurable paths
            src: 'src',
            dist: 'dist'
        },
        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
        },

        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            files: {
                src: ['<%= config.src %>/intro.js', '<%= config.src %>/colors/*.js', '<%= config.src %>/outro.js'],
                dest: '<%= config.dist %>/color_dictionary.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                    sourceMapName: '<%= config.dist %>/sourcemap.map'
                },
                files: {
                    '<%= config.dist %>/color_dictionary.min.js': ['<%= config.dist %>/color_dictionary.js']
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json', 'bower.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                updateConfigs: ['pkg']

            }
        }
    });


    grunt.registerTask('build', [
        'clean:dist',
        'bump-only',
        'concat',
        'uglify'
    ]);
    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};