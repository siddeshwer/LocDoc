

const signup_Btn = document.querySelector('#signup-btn');
signup_Btn.addEventListener('click', e => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log('User signed up!');
        alert("User Created");
        return "/profile.html";
    });
});


const login_Btn = document.querySelector('#login-btn');
login_Btn.addEventListener('click', e => {
    e.preventDefault();

    const email = document.querySelector('#user_email').value;
    const password = document.querySelector('#user_password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log('Logged in user!');
        })
        .catch(error => {
            console.log(error.message);
        })
});


const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
    console.log('User signed out!');
})

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email + " is logged in!");
    } else {
        console.log('User is logged out!');
    }
});