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
/**
* Represents a dailyView, a basic class used by the app
* @class DailyView
* @param {Object} container - identifies the container to attach the dailyView
* @param {Object} repository - defines the repository to take data from
* @param {Object} date - defines a date to write a calendar
*/

var DailyView = function (container, repository, date) {

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
    refresh: function (date) {}
};
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
    getAll: function (login) {
        var user = JSON.parse(localStorage.getItem(`${login}`));
        return user;
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
    getById: function (taskId) {},

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
    saveAll: function (tasks) {},

    SaveEventInDB(caption, dateDay) {
        var obj = this.getAll(userOnline);
        obj.tasks[`${dateDay}`] = obj.tasks[`${dateDay}`] || {
            title: [],
            text: [],
            comments: []
        };
        var arr = obj.tasks[`${dateDay}`].title;
        arr.push(caption);
        localStorage.setItem(`${userOnline}`, JSON.stringify(obj));
    }
};

class Pages {
    constructor() {
        this.body = document.querySelector('body');
        this.ls = new LocalStorageTasksRepository();
    }

    index() {
        this.body.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div class="jumbotron">
                        <h1>Welcome to Our Calendar</h1> 
                        <form class="form-signin">       
                            <h2 class="form-signin-heading">Log In</h2>
                            <div class="error bg-danger"><span>Ошибка: Неверный логин или пароль</span></div>
                            <input type="text" class="form-control my-login" id="login" name="username" placeholder="Email Address" required="" autofocus=""/>
                            <input type="password" class="form-control my-login" id="password" name="password" placeholder="Password" required=""/>      
                            <button class="btn btn-lg btn-primary btn-block" type="button">Login</button>   
                        </form>
                    </div>
                </div>
            </div>`;
    }

    monthlyView() {
        this.body.innerHTML = `
<div class="wrapper">
    <div class="container">
        <nav class="navbar">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#" id="currentUser">{User}'s Calendar</a>
                </div>
                <ul class="nav navbar-nav navbar-right my-navbar-right">
                    <li class="nav-list">
                        <button class="btn btn-primary navbar-btn"><a class="no-style" href="notes-view.html">Show All
                            Notes</a></button>
                    </li>
                    <li class="nav-list">
                        <button class="btn btn-primary navbar-btn"><a class="no-style" href="../index.html">Log Out</a>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="datepicker-wrapper">
                <div class="datepicker-title">Choose date</div>
                <div class="input-group date my-datapicker" data-provide="datepicker">
                    <input type="text" class="form-control" placeholder="dd/mm/yyyy">
                    <div class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar my-glyphicon-calendar"></span>
                    </div>
                </div>
            </div>
            <div class="viewpicker-wrapper">
                <div class="viewpicker-title"><a class="no-style-grey" href="monthly-view.html">Montly View</a></div>
                <input type="checkbox" name="my-checkbox" checked>
                <div class="viewpicker-title"><a class="no-style-grey" href="daily-view.html">Daily View</a></div>
            </div>
        </div>
        <div class="table-responsive my-table">
            <div class="table-rulers-wrapper">
                <span class="glyphicon glyphicon-triangle-left my-glyphicon-triangle" id="backButton"></span>
                <span class="calendar-title"></span>
                <span class="glyphicon glyphicon-triangle-right my-glyphicon-triangle"  id="forwardButton"></span>
            </div>
            <table class="table table-bordered my-table-bordered">
                <thead>
                <tr>
                    <th class="my-calendar-th">Monday</th>
                    <th class="my-calendar-th">Tuesday</th>
                    <th class="my-calendar-th">Wednesday</th>
                    <th class="my-calendar-th">Thursday</th>
                    <th class="my-calendar-th">Friday</th>
                    <th class="my-calendar-th">Saturday</th>
                    <th class="my-calendar-th">Sunday</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>`;
        $("[name='my-checkbox']").bootstrapSwitch();
        currentUser.innerHTML = userOnline;
    }

    renderCalendar(dateMoth) {
        var year = dateMoth[0];
        var month = dateMoth[1];
        var arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var showMonth = month - 1;
        document.querySelector(".calendar-title").innerHTML = arrMonth[showMonth] + " " + year;
        function createCalendar(id, year, month) {
            var elem = document.querySelector('tbody');
            var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
            var d = new Date(year, mon);
            var table = `<tr>`;
            // заполнить первый ряд от понедельника
            // и до дня, с которого начинается месяц
            // * * * | 1  2  3  4
            for (var i = 0; i < getDay(d); i++) {
                table += "<td class='my-calendar-cell'></td>";
            }
            // ячейки календаря с датами
            while (d.getMonth() == mon) {
                table += `<td class="d${d.getDate()}_${month}_${year} my-calendar-cell">${d.getDate()}</td>`;

                if (getDay(d) % 7 == 6) {
                    // вс, последний день - перевод строки
                    table += "</tr><tr>";
                }
                d.setDate(d.getDate() + 1);
            }
            // добить таблицу пустыми ячейками, если нужно
            if (getDay(d) != 0) {
                for (var i = getDay(d); i < 7; i++) {
                    table += "<td class='my-calendar-cell'></td>";
                }
            }
            // закрыть таблицу
            table += "</tr>";
            // только одно присваивание innerHTML
            elem.innerHTML = table;
        }

        function getDay(date) {
            // получить номер дня недели, от 0(пн) до 6(вс)
            var day = date.getDay();
            if (day == 0) day = 7;
            return day - 1;
        }

        createCalendar("calendar", year, month);
        document.querySelector("tbody").addEventListener("dblclick", () => this.addCaption(event));
        document.querySelector("tbody").addEventListener("click", () => this.delCaption(event));
        return dateMoth;
    }

    addEventForForwardButton(date) {
        var year = date[0];
        var month = date[1];
        if (month === 12) {
            year = year + 1;
            month = 1;
            date[0] = year;
            date[1] = month;
        } else {
            month = month + 1;
            date[1] = month;
        }
        document.querySelector('tbody').innerHTML = "";
        this.renderCalendar(date);
    }

    addEventForBackButton(date) {
        var year = date[0];
        var month = date[1];
        if (month === 1) {
            year = year - 1;
            month = 12;
            date[0] = year;
            date[1] = month;
        } else {
            month = month - 1;
            date[1] = month;
        }
        document.querySelector('tbody').innerHTML = "";
        this.renderCalendar(date);
    }

    addHandlerEvent(dateMonth) {
        document.querySelector("#backButton").addEventListener("click", () => this.addEventForBackButton(dateMonth));
        document.querySelector("#forwardButton").addEventListener("click", () => this.addEventForForwardButton(dateMonth));
    }

    addCaption(e) {
        var target = e.target;
        if (target.tagName !== "TD") return;
        var data = target.className;
        var task = prompt("Введите заголовок события?", "Пожрать");
        if (!task) return;
        target.innerHTML += `<div id="events">${task}<button class="cross">[x]</button></div>`;
        this.ls.SaveEventInDB(task, data);
    }

    delCaption(e) {
        var target = e.target;
        if (target.tagName !== "BUTTON") return;
        var text = target.parentNode.innerHTML.slice(0, -34);
        var date = target.parentNode.parentNode.className;
        target.parentNode.remove();
    }
}
class UserDB {
    constructor() {
        this.ls = new LocalStorageTasksRepository();
    }

    trySigninByLoginAndPass(login, password) {
        return new Promise((resolve, reject) => {
            let user = this.ls.getAll(login);
            if (user != null && user.password == password && login != '' && password != '') {
                userOnline = login;
                return resolve();
            }
            reject();
        });
    }

    tryRegisterWithLoginAndEmail(login, password) {
        return new Promise((resolve, reject) => {
            let user = this.ls.getAll(login);
            if (!user) {
                this.ls.add({}, login, password);
                userOnline = login;
                return resolve();
            } else {
                return reject();
            }
        });
    }
}
/**
* Represents a Task, a basic class used by the app.
* @class Task
* @param {Object} options - Options to initialize the Task with
* @param {string} options.id - Task id.
* @param {string} options.name - Task name.
* @param {string} options.description - Task description.
* @param {boolean} options.completed - Indicates whether Task was completed.
*/

var Task = function (options) {

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

var userOnline = '';
var index = {
    name: 'index',
    match: '',
    onBeforeEnter: () => console.log(`onBeforeEnter index`),
    onEnter: () => {
        let renderPage = new Pages();
        renderPage.index();
        document.querySelector('button.btn').addEventListener('click', () => {
            var log = login.value;
            var pass = password.value;

            let userDB = new UserDB();
            Promise.resolve().then(() => userDB.trySigninByLoginAndPass(log, pass)).catch(() => userDB.tryRegisterWithLoginAndEmail(log, pass)).then(() => location.hash = 'monthlyView').catch(() => document.querySelector('.error').style.display = 'block');
        });
    },
    onLeave: () => console.log('onLeave index')
};

var monthlyView = {
    name: 'monthlyView',
    match: text => text == 'monthlyView',
    onBeforeEnter: () => {
        if (!userOnline) {
            location.hash = "";
        }
    },
    onEnter: () => {
        let renderPage = new Pages();
        renderPage.monthlyView();
        let date = [];
        let dateTimeNow = new Date();
        let month = dateTimeNow.getMonth();
        let year = dateTimeNow.getFullYear();
        date.push(year);
        date.push(month + 1);
        renderPage.renderCalendar(date);
        renderPage.addHandlerEvent(date);
    },
    onLeave: () => {
        userOnline = '';
    }
};

function EventBus() {
    this.listeners = {};
}

EventBus.prototype = {

    on: function (event, callback) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(callback);
    },

    off: function (event, callback) {
        if (this.listeners[event]) {
            var callbackIndex = this.listeners[event].indexOf(callback);
            if (callbackIndex >= 0) {
                this.listeners[event].splice(callbackIndex, 1);
            }
        }
    },

    trigger: function (event, data) {
        (this.listeners[event] || []).forEach(function (callback) {
            return callback(data);
        });
        this.listeners['once' + event].forEach(function (callback) {
            return callback(data);
        });
        this.listeners['once' + event] = [];
    },

    once: function (event, callback) {
        this.listeners['once' + event] = this.listeners['once' + event] || [];
        this.listeners['once' + event].push(callback);
    }
};

var Router = function (options) {
    this.routes = options.routes || [];
    this.eventBus = options.eventBus;
    this.init();
};

Router.prototype = {
    init: function () {
        window.addEventListener('hashchange', () => this.handleUrl(window.location.hash));
        this.handleUrl(window.location.hash);
    },
    findPreviousActiveRoute: function () {
        return this.currentRoute;
    },
    findNewActiveRoute: function (url) {
        let route = this.routes.find(routeItem => {
            if (typeof routeItem.match === 'string') {
                return url === routeItem.match;
            } else if (typeof routeItem.match === 'function') {
                return routeItem.match(url);
            } else if (routeItem.match instanceof RegExp) {
                return url.match(routeItem.match);
            }
        });

        return route;
    },
    getRouteParams(route, url) {
        var params = url.match(route.match) || [];
        params.shift();
        return params;
    },
    handleUrl: function (url) {
        url = url.slice(1);
        let previousRoute = this.findPreviousActiveRoute();
        let newRoute = this.findNewActiveRoute(url);

        let routeParams = this.getRouteParams(newRoute, url);

        Promise.resolve().then(() => previousRoute && previousRoute.onLeave && previousRoute.onLeave(...this.currentRouteParams)).then(() => newRoute && newRoute.onBeforeEnter && newRoute.onBeforeEnter(...routeParams)).then(() => newRoute && newRoute.onEnter && newRoute.onEnter(...routeParams)).then(() => {
            this.currentRoute = newRoute;
            this.currentRouteParams = routeParams;
        });
    }
};
new Router({ routes: [index, monthlyView] });