/**
* Represents a calendar application that we build.
* @constructor
*/
var App = function () {

    /**
    * Defines repository to take data for the app elements
    * @name App#repository
    * @type Object
    */
    this.repository = new LocalStorageTasksRepository(userId);

    /**
    * Defines main view of the app
    * @name App#calendarView
    * @type Object
    */
    this.calendarView = new CalendarView(container, this.repository, startDate);

    /**
    * Defines daily view of the app
    * @name App#calendarView
    * @type Object
    */
    this.dailyView = new DailyView(container, this.repository, startDate);
};

App.prototype = {
    /**
    * Adds or updates task in local storage
    * @param {string} taskId - task id
    * @param {string} taskName - task name
    * @param {string} taskDescription - task description
    * @param {boolean} taskStatus - task completeness status
    */

    addOrUpdateTask: function (id, name, description, completed) {},

    /**
    * Removes task from local storage
    * @param {string} taskId - task id
    */

    deleteTask: function (id) {}
};