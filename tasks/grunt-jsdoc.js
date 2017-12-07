module.exports = function(grunt) {

  grunt.config({
       jsdoc : {
         dist : {
            src: ['./webapp/*.js', './webapp/controller/*.js'],
            options: {
                destination: 'doc'
            }
        }
      }
  });

  grunt.loadNpmTasks('grunt-jsdoc');

};