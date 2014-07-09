/*global require*/
'use strict';

require.config({
	baseUrl: '',
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
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		},

		handlebars: {
			exports: 'Handlebars',
			init: function() {
				this.Handlebars = Handlebars;
				return this.Handlebars;
			}
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
		'hbs': 'bower_components/require-handlebars-plugin/hbs',
		'json2': 'bower_components/json2/json2'
	}
});

require(
	[
		'marionette',
		'jquery'
	],

	function(Marionette, $) {
		var com = window.com = {};

		com.test = {};
		com.test.true = {
			woot: function() {
				console.log('ready');
			}
		};
	}
);