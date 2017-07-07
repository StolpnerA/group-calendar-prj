/**
* Represents a Task, a basic class used by the app.
* @class Task
* @param {Object} options - Options to initialize the Task with
* @param {string} options.id - Task id.
* @param {string} options.name - Task name.
* @param {string} options.description - Task description.
* @param {boolean} options.completed - Indicates whether Task was completed.
*/

var Task = function(options) {

	this.date = options && options.date;

    /**
    * Defines unique identificator for this task, equal to Time of task creation
    * @name Task#id
    * @type String
    */
	this.id = options && options.id;

	/**
    * Defines title for the Task
    * @name Task#name
    * @type String
    */
	this.name = options && options.name;

	/**
    * Defines description for the Task
    * @name Task#description
    * @type String
    */
	this.description = options && options.description;

	/**
    * Whether this Task is completed or not
    * @name Task#completed
    * @type Boolean
    * @default false
  	*/
	this.completed = options && options.completed;
};


