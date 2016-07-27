module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                options: {
                    paths: ["css/"],
                    yuicompress: true
                },
                files: {
                    "css/styles.css": ["css/styles.less"]
                }
            }
        },
        watch: {
            less: {
                files: ['css/*.less'],
                tasks: ['less:dev']
            }
        },
        connect: {
            devserver: {
                options: {
                    port: 9001,
                    base: '',
                    hostname: '*'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default development task
    grunt.registerTask('default', [
        "less:dev",
        "connect:devserver",
        "watch"
    ]);
};
