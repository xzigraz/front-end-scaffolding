require.config({
	baseUrl: 'js',
	shim: {
		underscore: {
			exports: '_'
		},

		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},

		marionette: {
			deps: [
				'jquery',
				'underscore',
				'backbone'
			],
			exports: 'Marionette'
		},

		radio: {
			deps: [
				'backbone'
			],
			exports: 'radio'
		},

		handlebars: {
			exports: 'Handlebars'
		},

		json2: {
			exports: 'JSON'
		}
	},

	locale: 'en_us',

	hbs: {
		templateExtension: 'hbs',
		disableI18n: true
	},

	paths: {
		'jquery': 'bower_components/jquery/dist/jquery',
		'backbone': 'bower_components/backbone/backbone',
		'underscore': 'bower_components/underscore/underscore',
		'handlebars': 'bower_components/handlebars/handlebars',
		'marionette': 'bower_components/marionette/lib/backbone.marionette',
		'radio': 'bower_components/backbone.radio/build/backbone.radio.min',
		'hbs': 'bower_components/require-handlebars-plugin/hbs',
		'json2': 'bower_components/json2/json2'
	}
});