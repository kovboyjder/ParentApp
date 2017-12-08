module.exports = function(grunt) {

  grunt.initConfig({
        pkg: require("./package.json")
  });

  // Load per-task config from separate files.
  grunt.loadTasks("tasks");
 

  grunt.registerTask('default', [
    "lint",
    "clean",
    "build",
    "nwabap_ui5uploader"

  ]);

};
