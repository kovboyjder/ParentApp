module.exports = function(grunt) {
var webAppDir = 'webapp'
  grunt.config('uglify', {
  options: {
  banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
  },
  uglifyTmp: {
                files: [
                    {
                        expand: true,
                        src:  "dist/controller/BaseController.js"
                    }]
            },
   uglifyPreload: {
                files: [
                    {
                        expand: true,
                        src:  "dist/Component-preload.js"
                    }]
            }
  });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
};

