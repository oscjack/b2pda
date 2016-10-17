const gulp = require('gulp');
const config = require('./config');
const forIn = require('lodash/forIn');

module.exports = {
	initTasks: function() {
		this.addTasks();
		this.addCompositeTasks();
		this.addDefaultTask();
	},

	addTasks: function() {
		config.tasks.forEach(function(taskName) {
			var taskFilename = taskName.replace(':', '.'),
				task;

			task = require('./tasks/' + taskFilename);

			gulp.task(taskName, task);
		});
	},

	addCompositeTasks: function() {
		forIn(config.compositeTasks, function(tasks, name) {
			gulp.task(name, tasks);
		});
	},

	addDefaultTask: function() {
		gulp.task('default', config.defaultTask);
	}
};