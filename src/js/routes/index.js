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
            Promise.resolve()
                .then(() => userDB.trySigninByLoginAndPass(log, pass))
                .catch(() => userDB.tryRegisterWithLoginAndEmail(log, pass))
                .then(() => location.hash = 'monthlyView')
                .catch(() => document.querySelector('.error').style.display = 'block')
        });
    },
    onLeave: () => console.log('onLeave index')
};

