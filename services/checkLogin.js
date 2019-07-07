// check if user is logged in or not

// if user is logged in display dashboard and logout 
// else dispaly login and register

const userStatus = localStorage.getItem("Token");
if(userStatus == null){
// when user is not logged in
    var dashboard = document.getElementById("dashboardNav");
    var logout = document.getElementById("logoutNav");
    
    // make them invisible
    dashboard.style.display = "none";
    logout.style.display = "none";
}else{
// when user is logged in
    var login = document.getElementById("loginNav");
    var register = document.getElementById("registerNav");
    
    // make them invisible
    login.style.display = "none";
    register.style.display = "none";
}