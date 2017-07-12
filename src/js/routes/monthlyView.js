var body = document.querySelector('body');
var monthlyView = {
    name: 'monthlyView',
    match: (text) => text == 'monthlyView',
    onBeforeEnter: () => console.log(`onBeforeEnter monthlyView`),
    onEnter: () => {
        body.innerHTML = `hi`;
    },
    onLeave: () => console.log('onLeave index')
};
