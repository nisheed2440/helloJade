module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            html: {
                options: {
                    pretty: true
                },
                files: {
                    'html_templates/index.html': ['jade_templates/homepage.jade'],
                    'html_templates/article.html': ['jade_templates/article.jade'],
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jade');

    // Default task(s).
    grunt.registerTask('default', ['jade']);

};