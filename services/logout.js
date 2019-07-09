
// to logout users
// function to logout use
function logoutUser(){

    // clear all the tokens, cookies and sessions
    
    if(localStorage.getItem("userType")=='admin'){
        // redirect to index page
        localStorage.clear();


        window.location.href ='../../views/';
    }else if(localStorage.getItem("userType")=='user'){
        localStorage.clear();

        window.location.href ='../views/';
    }
   
}

