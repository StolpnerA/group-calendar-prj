/**
* Represents a dailyView, a basic class used by the app
* @class DailyView
* @param {Object} container - identifies the container to attach the dailyView
* @param {Object} repository - defines the repository to take data from
* @param {Object} date - defines a date to write a calendar
*/

var DailyView = function(container, repository, date) {

    /**
    * Defines a date to write a calendar
    * @name DailyView#date
    * @type Object
    */
    this.date = date;

    /**
    * Identifies the container to attach the dailyView
    * @name DailyView#container
    * @type Object
    */
    this.container = container;

    /**
    * Defines the repository to take data from
    * @name DailyView#repository
    * @type Object
    */
    this.repository = repository;
};

DailyView.prototype = {

    /**
    * Updates calendarView
    * @param {Object} date - Date assigned to task
    * @param {number} date.day - Date day
    * @param {number} date.month - Date month
    * @param {number} date.year - Date year
    */
    refresh: function(date) {}
};