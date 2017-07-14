class UserDB {
    constructor() {
        this.ls = new LocalStorageTasksRepository();
    }

    trySigninByLoginAndPass(login, password) {
        return new Promise((resolve, reject) => {
            let user = this.ls.getAll(login);
            if (user != null && user.password == password &&
                login != '' && password != '') {
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
            }
            else {
                return reject();
            }
        });
    }
}