
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const logoutBtn = document.getElementById("logoutBtn");

const DEMO_USERNAME = "faris";
const DEMO_PASSWORD = "store123";

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
        sessionStorage.setItem("farisUser", username);
        showHome(username);
    } else {
        document.getElementById("errorMessage").textContent =
            "Incorrect username or password!";
    }
});

function showHome(username) {
    loginPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");

    document.getElementById("userName").textContent = username;

    window.scrollTo(0, 0);
}

logoutBtn.addEventListener("click", function() {
    sessionStorage.removeItem("farisUser");

    homePage.classList.add("hidden");
    loginPage.classList.remove("hidden");
    logoutBtn.classList.add("hidden");

    loginForm.reset();

    window.scrollTo(0, 0);
});

document.querySelectorAll(".add-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        const product = this.parentElement.querySelector("h3").textContent;

        document.getElementById("cartMessage").textContent =
            product + " added to your demo bag!";
    });
});

// Restore demo login during the current browser session
const savedUser = sessionStorage.getItem("farisUser");

if (savedUser) {
    showHome(savedUser);
}
