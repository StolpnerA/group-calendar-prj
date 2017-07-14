var monthlyView = {
    name: 'monthlyView',
    match: (text) => text == 'monthlyView',
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
