const logn = document.querySelector(".login");
const logout = document.querySelector(".logout");
const windowLogIn = document.querySelector(".logInDiv");
const windowLogOut = document.querySelector(".logOutDiv");
let count = Number(localStorage.getItem("count")) || 0;

if (localStorage.getItem("loginIN")) {
  windowLogOut.style.display = "block";
  windowLogIn.style.display = "none";
  alert("user is already logged In");
}

function login(username, password) {
  count = Number(localStorage.getItem("count")) || 0;
  if (count === 0) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    count++;
    localStorage.setItem("count", count);
  }
  console.log(username);
  console.log(password);
  if (
    localStorage.getItem("username") === username &&
    localStorage.getItem("password") === password
  ) {
    alert("user logged in");
    localStorage.setItem("loginIN", true);
  } else {
    alert("incorrect password or username");
  }
}
logn.addEventListener("click", () => {
  if (
    document.querySelector(".username").value === "" &&
    document.querySelector(".password").value === ""
  ) {
    alert("required");
  } else {
    login(
      document.querySelector(".username").value,
      document.querySelector(".password").value
    );
  }
});
logout.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("loginIN", false);
  windowLogIn.style.display = "block";
  windowLogOut.style.display = "none";
});
