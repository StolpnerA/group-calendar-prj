var monthlyView = {
    name: 'monthlyView',
    match: (text) => text == 'monthlyView',
    onBeforeEnter: () => {
        var ls = localStorage.getItem("user");
        if (ls != userOnline && ls == null) {
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
    },
    onLeave: () => {
        localStorage.removeItem("user");
    }
};
