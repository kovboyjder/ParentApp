
module.exports = function(grunt) {
	var sUser = 'ZP001631';
	var sPwd = 'Bigbyd06';

	grunt.config({
		nwabap_ui5uploader: {
    options: {
      conn: {
			server: 'https://localhost:44300'
      },
      auth: {
        user: sUser,
        pwd: sPwd
      }
    },
    upload_build: {
      options: {
        ui5: {
           package: '$TMP',
           bspcontainer: 'ZHR_EMF_REQUEST',
           bspcontainer_text: 'UI5 upload local objects'
        },
        resources: {
          cwd: 'dist',
          src: '**/*.*'
        }
      }
    }
  }
});

	    grunt.loadNpmTasks('grunt-nwabap-ui5uploader');

};