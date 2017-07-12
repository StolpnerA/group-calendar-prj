var body = document.querySelector('body');
var index = {
    name: 'index',
    match: '',
    onBeforeEnter: () => console.log(`onBeforeEnter index`),
    onEnter: () => {
        body.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div class="jumbotron">
                        <h1>Welcome to Our Calendar</h1> 
                        <form class="form-signin">       
                            <h2 class="form-signin-heading">Log In</h2>
                            <input type="text" class="form-control my-login" id="login" name="username" placeholder="Email Address" required="" autofocus=""/>
                            <input type="password" class="form-control my-login" id="password" name="password" placeholder="Password" required=""/>      
                            <button class="btn btn-lg btn-primary btn-block" type="button">Login</button>   
                        </form>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('button.btn').addEventListener('click', () => {
            var log = login.value;
            var pass = password.value;

            let userDB = new UserDB();
            Promise.resolve()
                .then(() => userDB.trySigninByLoginAndPass(log, pass))
                .catch(() => userDB.tryRegisterWithLoginAndEmail(log, pass))
                .then(() => location.hash = 'monthlyView')
                .catch(() => console.log('Ошибка:Неверный логин или пароль'));
        });
    },
    onLeave: () => console.log('onLeave index')
};

