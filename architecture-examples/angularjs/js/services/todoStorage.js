/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', function ($log) {
	return {
		get: function () {
			var request = new XMLHttpRequest();
			request.open('GET', 'http://ng-todomvc-s3.s3.amazonaws.com/todos.json', false);
			request.send(null);

			if (request.status === 200) {
				$log.info("GET200:" + request.responseText);
				return JSON.parse(request.responseText || '[]');
			}
		},

		put: function (todos) {
			var request = new XMLHttpRequest();
			request.open('PUT', 'http://ng-todomvc-s3.s3.amazonaws.com/todos.json', false);
			request.send(JSON.stringify(todos));
			$log.info("PUT" + request.status);
		}
	};
});
