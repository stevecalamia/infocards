module.exports = function(grunt) {
    // Project Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: '*.md',
                        dest: './',
                        ext: '.html'
                    }
                ],
                options: {
                    template: 'templates/main.html',
                    markdownOptions: {
                        gfm: true,
                        highlight: 'auto'
                    }
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    precision: 5,
                    compass: true
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        qunit: {
            all: ['tests/*.html']
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass'],
            }
        },
    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    // We should ALWAYS define the 'default' task
    grunt.registerTask('default', ['sass', 'watch']);
        // watch should run last so that it's not running over things twice
    grunt.registerTask('qunit', ['qunit']);
    grunt.registerTask('md', ['markdown']);
};

