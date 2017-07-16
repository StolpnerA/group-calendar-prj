/**
 * Represents a storage for tasks based on local storage.
 * @constructor
 * @param {string} userId - The user id.
 */
var LocalStorageTasksRepository = function (userId) {

};

LocalStorageTasksRepository.prototype = {
    /**
     * Returns list of all tasks for given user.
     * @returns {Object[]} List of tasks.
     */
    getAll: function (login) {
        var user = JSON.parse(localStorage.getItem(`${login}`));
        return user
    },

    // getByUser: function (user) {
    //    var allLS = this.getAll();
    //    for (key in allLS) {
    //        if (key == user){
    //            var currentUser = allLS[key];
    //            return currentUser;
    //         }
    //     }
    // },

    /**
     * Returns list of all tasks for given date.
     * @param {Object} date - Date assigned to task.
     * @param {number} date.day - Date day.
     * @param {number} date.month - Date month.
     * @param {number} date.year - Date year.
     * @returns {Object[]} List of tasks.
     */
    getByDate: function (date) {
        // let currentDate = String(date.day) + date.month + date.year;
        // let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
        // let currentTask = {};
        // for (key in tasks.date) {
        //     if (currentDate == tasks.date[key]) {
        //         currentTask += tasks.name;
        //     }
        // }
        // return currentTask
    },

    /**
     * Returns task by it's id.
     * @param {string} taskId - The task id.
     * @returns {Object} task.
     */
    getById: function (taskId) {

    },

    /**
     * Adds task.
     * @param {Object} task - task itself.
     * @param {string} task.name - task name.
     * @param {string} task.description - task description.
     * @param {string} task.completed - Indicates whether task was completed
     * @param {Object} task.date - Date assigned to task.
     * @param {number} task.date.day - Date day.
     * @param {number} task.date.month - Date month.
     * @param {number} task.date.year - Date year.
     * @returns {Object} task.
     */
    add: function (task, login, pass) {
        if (!task || !login || !pass) return;
        var obj = {
            password: pass,
            tasks: task
        };
        localStorage.setItem(`${login}`, JSON.stringify(obj));
    },

    /**
     * Updates task.
     * @param {Object} task - task itself.
     * @param {string} task.Id - task id (datetime to milliseconds).
     * @param {string} task.Name - task name.
     * @param {string} task.Description - task description.
     * @param {string} task.Completed - Indicates whether task was completed.
     * @returns {Object} task.
     */
    update: function (task) {

    },

    /**
     * Removes task.
     * @param {string} taskId - task id.
     */
    delete: function (taskId) {

    },

    /**
     * Saves object to local storage.
     * @param {Object} tasks - tasks.
     */
    saveAll: function (tasks) {

    },

    SaveEventInDB(taskTitle, taskDescription, dateDay) {
        var obj = this.getAll(sessionStorage.getItem('currentUser'));
        obj.tasks[`${dateDay}`] = obj.tasks[`${dateDay}`] || {
                title: [],
                description: [],
                done: []
            };
        var arrTitle = obj.tasks[`${dateDay}`].title;
        arrTitle.push(taskTitle);
        var arrDescription = obj.tasks[`${dateDay}`].description;
        arrDescription.push(taskDescription);
        var arrDone = obj.tasks[`${dateDay}`].done;
        arrDone.push(false);
        localStorage.setItem(`${sessionStorage.getItem('currentUser')}`, JSON.stringify(obj));
    },

    loadEventsFromDB () {
        let obj = this.getAll(sessionStorage.getItem("currentUser"));
        let cal = document.querySelector("table");
        for (let dateLoad in obj.tasks) {
            let loadData = obj.tasks[`${dateLoad}`].title;
            let res = cal.querySelector(`.${dateLoad}`);
            if (res != null) {
                if (loadData.length - 1 == 0) {
                    res.innerHTML += `<div>${loadData}<button class="cross">[x]</button></div>`;
                } else {
                    for (var i = 0; i < loadData.length; i++) {
                        var dbArr = loadData;
                        res.innerHTML += `<div>${dbArr[
                            i
                            ]}<button class="cross">[x]</button></div>`;
                    }
                }
            }
        }
    },
    deleteEventInDB(dateDay, text) {
        //удаление пока только заголовка
        var obj = this.getAll(sessionStorage.getItem("currentUser"));
        var index = obj.tasks[`${dateDay}`].title.indexOf(text);
        obj.tasks[`${dateDay}`].title.splice(index, 1);
        obj.tasks[`${dateDay}`].description.splice(index, 1);
        obj.tasks[`${dateDay}`].done.splice(index, 1);
        localStorage.setItem(
            `${sessionStorage.getItem("currentUser")}`,
            JSON.stringify(obj)
        );
    }
}
