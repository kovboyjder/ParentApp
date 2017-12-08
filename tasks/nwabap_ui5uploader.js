
module.exports = function(grunt) {
	var sUser = 'developer';
	var sPwd = 'Init1234';

	grunt.config(
		'nwabap_ui5uploader', {
    options: {
      conn: {
			server: 'https://localhost:44300',
      useStrictSSL: false
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
           bspcontainer: 'Ztest',
           bspcontainer_text: 'UI5 upload local objects'
        },
        resources: {
          cwd: 'dist',
          src: '**/*.*'
        }
      }
    }
  }
);

	    grunt.loadNpmTasks('grunt-nwabap-ui5uploader');

};
