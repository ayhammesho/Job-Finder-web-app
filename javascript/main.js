"use strict";

// const search = document.querySelector("#search").value.toLowerCase();
// const jobName = document.querySelectorAll(".heading_terneray");
// const jobCard = document.querySelectorAll(".job_card");
const indexBtn = document.querySelector(".btn");
const signUpBtn = document.querySelector(".signup");
const signInBtn = document.querySelector(".signin");
const heroText = document.querySelector(".hero-main");
const hero = document.querySelector(".hero");
const heroForm = document.querySelector(".hero-form");
const signIn = document.getElementById("signin");
const signUp = document.getElementById("signup");
const fullName = document.getElementById("full_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rPassword = document.getElementById("r-password");
const company = document.getElementById("company");
const person = document.getElementById("person");
const add = document.querySelector(".addus");
const signSubmit = document.querySelector(".sign");
const error = document.querySelector("#error");
const err = document.querySelector("#err");
const emailSignIn = document.querySelector(".email_signin");
const passwordSignIn = document.querySelector(".password_signin");

let storage;

const displaySignUp = function () {
  signIn.style.display = "none";
  signUp.style.display = "block";
};

const displaySignIn = function () {
  signUp.style.display = "none";
  signIn.style.display = "block";
};

const cc = function () {
  hero.style.justifyContent = "space-between";
};

// FOR SHOWING THE SING UP FORM FROM HOME BUTTON
const animation = function () {
  if (
    !heroForm.classList.contains("animation-1") &&
    !heroForm.classList.contains("animation-2")
  ) {
    heroText.style.animationName = "moveHeading";
    heroText.style.animationDuration = "1.5s";
    heroText.style.animationFillMode = "both";
    signUp.classList.add("animation-1");
    signUp.style.display = "block";
    setTimeout(cc, 1100);
    signUpBtn.classList.add("active");
  }
};

// FOR SHOWING THE SING UP FORM
const animationUp = function () {
  if (
    !heroForm.classList.contains("animation-1") &&
    !heroForm.classList.contains("animation-2")
  ) {
    heroText.style.animationName = "moveHeading";
    heroText.style.animationDuration = "1.5s";
    heroText.style.animationFillMode = "both";
    signUp.classList.add("animation-1");
    signUp.style.display = "block";
    setTimeout(cc, 1100);
    signUpBtn.classList.add("active");
  }
};

// FOR SHOWING THE SING IN FORM
const animationIn = function () {
  if (
    !heroForm.classList.contains("animation-1") &&
    !heroForm.classList.contains("animation-2")
  ) {
    heroText.style.animationName = "moveHeading";
    heroText.style.animationDuration = "1.5s";
    heroText.style.animationFillMode = "both";
    signIn.classList.add("animation-1");
    signIn.style.display = "block";
    setTimeout(cc, 1100);
    signInBtn.classList.add("active");
  }
};

indexBtn.addEventListener("click", animation);
signUpBtn.addEventListener("click", animationUp);
signInBtn.addEventListener("click", animationIn);

// FOR SWITCHING BETWEEN THE TWO FORMS
signUpBtn.addEventListener("click", function () {
  if (signIn.classList.contains("animation-1")) {
    signIn.classList.remove("animation-1");
    signIn.classList.add("animation-2");
    signUp.classList.remove("animation-2");
    signUp.classList.add("animation-1");
    setTimeout(displaySignUp, 1500);
    signUpBtn.classList.add("active");
    signInBtn.classList.remove("active");
  }
});
signInBtn.addEventListener("click", function () {
  if (signUp.classList.contains("animation-1")) {
    signUp.classList.remove("animation-1");
    signUp.classList.add("animation-2");
    signIn.classList.remove("animation-2");
    signIn.classList.add("animation-1");
    signUpBtn.classList.remove("active");
    signInBtn.classList.add("active");
    setTimeout(displaySignIn, 1500);
  }
});

// SHOWING ERROR
const raiseError = function (text, err) {
  if (err) error.style.color = "red";
  else error.style.color = "green";
  error.textContent = text;
};

const checkErrorSignUp = function (e) {
  let result = true;
  // CHECK IF EMAIL HERE BEFORE
  storage = localStorage.getItem("users");
  if (storage == null) {
    if (
      !email.value.length ||
      !password.value.length ||
      !rPassword.value.length ||
      !fullName.value.length
    ) {
      result = false;
      raiseError("All fileds are required", !result);
    }
  } else {
    let obj = JSON.parse(storage);
    obj["users"].forEach((element) => {
      if (e === element.email) {
        result = false;
        raiseError("You already sign up with this account", !result);
      }
    });
  }

  // CHECKING INPUT ERRORS
  if (result) {
    if (!person.checked && !company.checked) {
      result = false;

      raiseError(" must choose Company or User", !result);
    } else if (password.value.length < 8) {
      result = false;
      raiseError("password must be at least 8 characters", !result);
    } else if (password.value != rPassword.value) {
      result = false;
      raiseError("password does not match reply password", !result);
    }

    setTimeout(() => {
      error.textContent = "";
    }, 3000);

    return result;
  }
};

// FOR ADDING NEW USERS
const addNewUser = function (
  fullName,
  em,
  password,
  rPassword,
  person,
  company
) {
  storage = localStorage.getItem("users");
  if (checkErrorSignUp(email.value)) {
    if (storage == null) {
      let obj = {
        users: [],
      };
      obj["users"].push({
        full_name: fullName,
        email: em,
        password: password,
        repeated_password: rPassword,
        company: company,
        person: person,
      });
      localStorage.setItem("users", JSON.stringify(obj));
      alert("Your Account has been reigesterd sucssfuly please Sign In now!");
      // obj["users"].forEach((element) => {
      //   if (element.company)
      //     setTimeout(() => {
      //       location.replace("main_company.html");
      //     }, 500);
      //   else
      //     setTimeout(() => {
      //       location.replace("main_person.html");
      //     }, 500);
      // });
    } else {
      let obj = JSON.parse(storage);
      obj["users"].push({
        full_name: fullName,
        email: em,
        password: password,
        repeated_password: rPassword,
        company: company,
        person: person,
      });
      localStorage.setItem("users", JSON.stringify(obj));
      alert("Your Account has been reigesterd sucssfuly please Sign In now!");

      // obj["users"].forEach((element) => {
      //   if (element.company)
      //     setTimeout(() => {
      //       location.replace("main_company.html");
      //     }, 500);
      //   else
      //     setTimeout(() => {
      //       location.replace("main_person.html");
      //     }, 500);
      // });
    }
  }
};

// add.addEventListener("click", addNewUser);

// window.addEventListener("resize", function () {
//   if (window.innerWidth <= 700) {
//     signUp.classList.add("animation-1");
//     signUpBtn.classList.add("active");
//   }
// });

let addClass = function () {
  let width = window.innerWidth;
  if (width <= 700) {
    signUp.classList.add("animation-1");
    signUpBtn.classList.add("active");
  }
};

setInterval(addClass(), 200);

add.addEventListener("click", (event) => {
  addNewUser(
    fullName.value,
    email.value,
    password.value,
    rPassword.value,
    company.checked,
    person.checked
  );
});

// SIGN IN
const raiseErr = function (text, er) {
  if (er) err.style.color = "red";
  else err.style.color = "green";
  err.textContent = text;
};

function getUserData(e) {
  let data = localStorage.getItem("users");
  let obj = {};
  if (data == null) {
    return obj;
  } else {
    data = JSON.parse(data);
    data.users.forEach((element) => {
      console.log(e == element.email);
      if (e == element.email) obj = element;
    });
    return obj;
  }
}

let checkErrorSignIn = function (e, pass) {
  let result = false;
  // check if email are here before
  storage = localStorage.getItem("users");
  if (storage == null) {
    raiseErr("Email invaild or", !result);
    return result;
  } else {
    let obj = JSON.parse(storage);
    obj["users"].forEach((element) => {
      if (e == element.email && pass == element.password) {
        if (element.company)
          setTimeout(() => {
            location.replace("main_company.html");
          }, 500);
        else
          setTimeout(() => {
            location.replace("main_person.html");
          }, 500);

        result = true;
      }
    });
    if (!emailSignIn.value.length || !passwordSignIn.value.length) {
      result = false;
      raiseErr("All fileds should not be empty", !result);
    } else if (!result) {
      raiseErr("Email invaild or password", !result);
    }

    setTimeout(() => {
      err.textContent = "";
    }, 3000);
    return result;
  }
};

function signin() {
  if (checkErrorSignIn(emailSignIn.value, passwordSignIn.value)) {
    storage = JSON.stringify(getUserData(emailSignIn.value));
    localStorage.setItem("login", storage);
  }
}

signSubmit.addEventListener("click", (event) => {
  signin();
});

//
//
// AYHAM MESHO
//
//

// I'M REALLY SORRY I'COULDN'T COMPLETE ALL THE TASK IN THE RIGHT TIME
//  BUT I WILL KEEP WORKING ON IT ALSO AND MAKE IT BETTER
//  THANK YOU FOR THIS OPPORTUNITY I WOULD REALLY LOOKING FORWARDS TO HEARING NEWS FROM YOU
// THANKS FOR HANDLING READING MY CODE :);

//
//
//
//
//
//
