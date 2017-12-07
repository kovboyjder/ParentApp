


module.exports = function(grunt) {

  grunt.config('copy', {
    main: {
        files: [{
            expand: true,
            src: [ './**', '!./build/**', '!./zip/*'],
            dest: './build/WebContent/',
            rename: function(dest, src){
                // this.js -> this-dbg.js
                var destinationFilename = "";
                if(src.search('controller') > 0){
                    destinationFilename = dest + src.replace(/\.controller\.js$/, "-dbg.controller.js");
                } else {
                    destinationFilename = dest + src.replace(/\.js$/, "-dbg.js");
                }
                // grunt.log.writeln(destinationFilename + " | " + src);
                return destinationFilename;
            }
        },
        {
        expand: true,
        src: ['.Ui5RepositoryUploadParameters'],
        dest:  './build/'
    }],
}
});

};