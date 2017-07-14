class UserDB {
    constructor () {
        this.ls = new LocalStorageTasksRepository();
    }
    trySigninByLoginAndPass(login, password) {
        return new Promise((resolve, reject) => {
            let users = this.ls.getAll();
            for (var name in users) {
                let user = users[name] || {};
                if (name == login && user.password == password
                    && login != '' && password != '') {
                    userOnline = login;
                    localStorage.setItem('user', login);
                    return resolve();
                }
            }
            reject();
        });
    }
    tryRegisterWithLoginAndEmail(login, password) {
        return new Promise((resolve, reject) => {
            let users = this.ls.getAll();
            if (!users) {
                this.ls.add({}, login, password);
                return resolve();
            }
            else {
                for (var name in users) {
                    if (name == login || login == '') {
                        return reject();
                    }
                }
                this.ls.add({}, login, password);
                userOnline = login;
                localStorage.setItem('user', login);
                resolve();

            }
        });
    }
}