/**
* Represents a calendarView, a basic class used by the app
* @class CalendarView
* @param {Object} container - identifies the container to attach the calendarView
* @param {Object} repository - defines the repository to take data from
* @param {Object} date - defines a date to write a calendar
*/

var CalendarView = function (container, repository, date) {

    /**
    * Defines a date to write a calendar
    * @name CalendarView#date
    * @type Object
    */
    this.date = date;

    /**
    * Identifies the container to attach the calendarView
    * @name CalendarView#container
    * @type Object
    */
    this.container = container;

    /**
    * Defines the repository to take data from
    * @name CalendarView#repository
    * @type Object
    */
    this.repository = repository;
};

CalendarView.prototype = {

    /**
    * Updates calendarView to the next month 
    */
    moveNextMonth: function () {},

    /**
    * Updates calendarView to the previous month
    */
    movePreviousMonth: function () {},

    /**
    * Updates calendarView to particular date (only month and date are used)
    * @param {Object} date - Date assigned to task
    * @param {number} date.day - Date day
    * @param {number} date.month - Date month
    * @param {number} date.year - Date year
    */
    refresh: function (date) {}

};