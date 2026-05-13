let isLogin = true;

function toggleForm() {
  const title = document.getElementById("formTitle");
  const email = document.getElementById("email");
  const btn = document.getElementById("submitBtn");
  const toggleText = document.getElementById("toggleText");

  isLogin = !isLogin;

  if (isLogin) {
    title.innerText = "Login";
    email.classList.add("hidden");
    btn.innerText = "Login";
    toggleText.innerHTML = `Don't have an account? <span onclick="toggleForm()">Sign Up</span>`;
  } else {
    title.innerText = "Sign Up";
    email.classList.remove("hidden");
    btn.innerText = "Sign Up";
    toggleText.innerHTML = `Already have an account? <span onclick="toggleForm()">Login</span>`;
  }
}

function handleForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!username || !password || (!isLogin && !email)) {
    alert("Please fill all fields");
    return;
  }

  if (isLogin) {
    alert("Login Successful!");
  } else {
    alert("Sign Up Successful!");
  }
}