module.exports = function(grunt) {
	var sUser = 'developer';
	var sPwd = 'Fernando1.';

	grunt.config('nwabap_ui5uploader', {
		options: {
			conn: {
				server: 'https://webidecp-p1940500295trial.dispatcher.hanatrial.ondemand.com/destinations/esf',
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
					bspcontainer: 'ztest123',
					bspcontainer_text: 'Employee Movement Request'
				},
				resources: {
					cwd: 'dist',
					src: '**/*.*'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-nwabap-ui5uploader');

};