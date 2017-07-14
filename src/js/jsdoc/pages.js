class Pages {
    constructor() {
        this.body = document.querySelector('body');
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
        <nav class="navbar">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">{User}'s Calendar</a>
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
        <div class="table"></div>`;
    };

    renderCalendar(dateMont) {
        var year = dateMont[0];
        var month = dateMont[1];

        function createCalendar(id, year, month) {
            var elem = document.querySelector('div.table');
            var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
            var d = new Date(year, mon);
            var table = `<table class="table table-bordered table-hover"><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;
            // заполнить первый ряд от понедельника
            // и до дня, с которого начинается месяц
            // * * * | 1  2  3  4
            for (var i = 0; i < getDay(d); i++) {
                table += "<td></td>";
            }
            // ячейки календаря с датами
            while (d.getMonth() == mon) {
                table += `<td class="d${d.getDate()}_${month}_${year}">${d.getDate()}</td>`;

                if (getDay(d) % 7 == 6) {
                    // вс, последний день - перевод строки
                    table += "</tr><tr>";
                }
                d.setDate(d.getDate() + 1);
            }
            // добить таблицу пустыми ячейками, если нужно
            if (getDay(d) != 0) {
                for (var i = getDay(d); i < 7; i++) {
                    table += "<td></td>";
                }
            }
            // закрыть таблицу
            table += "</tr></table>";
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
        // document
        //     .querySelector("table")
        //     .addEventListener("dblclick", () => this.addCaption(event));
        // document
        //     .querySelector("table")
        //     .addEventListener("click", () => this.delCaption(event));
        return dateMont;
    }
}