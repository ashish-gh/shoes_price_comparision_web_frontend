
// to logout users
// function to logout use
function logoutUser(){

    // clear all the tokens, cookies and sessions
    localStorage.clear();

    // redirect to index page
    window.location.href = '../index.html'
 
}

