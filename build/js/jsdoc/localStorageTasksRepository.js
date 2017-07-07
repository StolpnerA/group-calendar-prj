/**
 * Represents a storage for tasks based on local storage.
 * @constructor
 * @param {string} userId - The user id.
 */
var LocalStorageTasksRepository = function (userId) {};

LocalStorageTasksRepository.prototype = {
	/**
 * Returns list of all tasks for given user.	
 * @returns {Object[]} List of tasks.
 */
	getAll: function () {},

	/**
 * Returns list of all tasks for given date.
 * @param {Object} date - Date assigned to task.
 * @param {number} date.day - Date day.
 * @param {number} date.month - Date month.
 * @param {number} date.year - Date year.
 * @returns {Object[]} List of tasks.
 */
	getByDate: function (date) {},

	/**
 * Returns task by it's id.
 * @param {string} taskId - The task id.
 * @returns {Object} task.
 */
	getById: function (taskId) {},

	/**
 * Adds task.
 * @param {Object} task - task itself.
 * @param {string} task.name - task name.
 * @param {string} task.description - task description.
 * @param {string} task.completed - Indicates whether task was completed.
 * @param {Object} task.date - Date assigned to task.
 * @param {number} task.date.day - Date day.
 * @param {number} task.date.month - Date month.
 * @param {number} task.date.year - Date year.
 * @returns {Object} task.
 */
	add: function (task) {},

	/**
 * Updates task.
 * @param {Object} task - task itself.
 * @param {string} task.Id - task id (datetime to milliseconds).
 * @param {string} task.Name - task name.
 * @param {string} task.Description - task description.
 * @param {string} task.Completed - Indicates whether task was completed.
 * @returns {Object} task.
 */
	update: function (task) {},

	/**
 * Removes task.
 * @param {string} taskId - task id.
 */
	delete: function (taskId) {},

	/**
 * Saves object to local storage.
 * @param {Object} tasks - tasks.
 */
	saveAll: function (tasks) {}
};