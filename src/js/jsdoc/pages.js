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
    };

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
        currentUser.innerHTML = sessionStorage.getItem('currentUser');
    };

    renderMadal(e) {
        var target = e.target;
        if (target.tagName !== "TD") return;
        var data = target.className.slice(0, -17);
        let tbody = document.querySelector('tbody');
        tbody.innerHTML += `
        <div class="note-create-form">
                    <div class="note-header">
                         <span class="day">${data}</span>
                         <span class="glyphicon glyphicon glyphicon-remove closeModal"></span>
                    </div>
                    <div class="note-title"><input type="text" placeholder="Title" id="taskTitleInput"></div>
                    <div class="note-body">
                                <textarea id="taskDescriptionInput">
                                
</textarea>
                            </div>
                            <button class="btn btn-default my-btn-default">Save</button>
                        </div>`;
        let modal = document.querySelector('.note-create-form');
        let closeModal = modal.querySelector('.closeModal');
        let save = modal.querySelector('button');
        modal.style.display = 'flex';
        taskDescriptionInput.value = '';
        closeModal.addEventListener('click', () => modal.style.display = 'none');
        save.addEventListener('click', () => {
            let taskTitle = taskTitleInput.value;
            let taskDescription = taskDescriptionInput.value;
            if (taskTitle) this.addCaption(taskTitle, taskDescription, data);
        })
    };

    renderCalendar(dateMoth) {
        var year = dateMoth[0];
        var month = dateMoth[1];
        var arrMonth = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var showMonth = month - 1;
        document.querySelector(".calendar-title").innerHTML =
            arrMonth[showMonth] + " " + year;
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
        this.ls.loadEventsFromDB();
        document
            .querySelector("tbody")
            .addEventListener("dblclick", () => this.renderMadal(event));
        document
            .querySelector("tbody")
            .addEventListener("click", () => this.delCaption(event));
        return dateMoth;
    };

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
    };

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
    };

    addHandlerEvent(dateMonth) {
        document
            .querySelector("#backButton")
            .addEventListener("click", () => this.addEventForBackButton(dateMonth));
        document
            .querySelector("#forwardButton")
            .addEventListener("click", () => this.addEventForForwardButton(dateMonth));
    };

    addCaption(taskTitle, taskDescription, data) {
        document.querySelector(`.${data}`).innerHTML += `<div>${taskTitle}<button class="cross">[x]</button></div>`;
        this.ls.SaveEventInDB(taskTitle, taskDescription, data);
    };

    delCaption(e) {
        // тут код для удаления заголовка
        var target = e.target;
        if (target.tagName !== "BUTTON") return;
        var text = target.parentNode.innerHTML.slice(0, -34);
        var date = target.parentNode.parentNode.className.slice(0, -17);
        target.parentNode.remove();
        this.ls.deleteEventInDB(date, text); // вызов метода из базы для удаления евента принимает на вход текст заголовка и тег в какой записали
    }
}