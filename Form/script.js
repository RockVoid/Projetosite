const $form = document.getElementById("form");
const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $passwordtwo = document.getElementById("passwordTwo");

$form.addEventListener("submit", event => {
    event.preventDefault();

    checkInputs();
})

const checkInputs = () => {
    const usernameValue = $username.value.trim();
    const emailValue = $email.value.trim();
    const passwordValue = $password.value.trim();
    const password2Value = $passwordtwo.value.trim();

    if (usernameValue === "") {
        setErrorFor($username, "Input cannot be blank!");
    } else {
        setSucessFor($username);
    }

    if (emailValue === "") {
        setErrorFor($email, "Email cannot be blank!");
    } else if (!isEmail) {
        setErrorFor($email, "Invalid Email");
    } else {
        setSucessFor($email);
    }

    if (passwordValue === "") {
        setErrorFor($password, "Input cannot be blank!");
    } else {
        setSucessFor($password);
    }

    if (password2Value === "") {
        setErrorFor($passwordtwo, "Input cannot be blank!");
    } else if(password2Value !== passwordValue) {
        setErrorFor($passwordtwo, "Passwords does not match!");
    }
    else {
        setSucessFor($passwordtwo);
    }
}

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

const setSucessFor = input => {
    const formControl = input.parentElement;
    formControl.className = "form-control sucess";
}

const isEmail = email => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}