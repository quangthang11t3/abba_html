'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9003,
          hostname: '*',
        }
      }
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js', 'config/*.js'],
        options: {
          reload: true
        }
      },
      options: {
        livereload: true
      },
      html: {
        options: {
          livereload: true
        },
        files: ['*.html', 'shared/style/**/*.css']
      },
      css: {
        options: {
          livereload: true
        },
        files: ['shared/style/**/*.css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Launch BrowserSync + watch task
  grunt.registerTask('default', ['connect', 'watch']);
};
