// window gets load when login page is opened
window.onload = function() {

  // to retreive email and password from form
    const emailNode = document.getElementById('email');
    const  passwordNode = document.getElementById('password');
    
    // to add event listener for login 
    const button = document.getElementById('login');
    button.addEventListener('click', function() {
                
    // validation
      // check if text fields are empty or not
      if(textValidation()){
        // to check if email is in proper form
          if(emailValidation()){
            // to authenticate user on basis of email and password
              authenticate()              
          }
        }
    });

    // function for user authentication
    function authenticate(){
      // to handle authentication request
        fetch('http://localhost:3800/users/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify({
              email: emailNode.value,
              password: passwordNode.value,
            })
          })
          .then(data => {
            return data.json();
          })
          .then(json => {
            if (json.status === 'success') {
              // to set token for authenticted user 
              localStorage.setItem('Token', json.accessToken);
              
              // to get current type of user to navigate them on corresponding page
                  getUserType();
            } else {
              alert('user not found');
              emailNode.focus();
            }
          })
          .catch(error => {
            console.log(error);
          });  
      }


// function to get user type for logged user
function getUserType(){

      // to handle request 
        fetch('http://localhost:3800/users/'+emailNode.value+'/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": localStorage.getItem('Token')

        }
      })
      .then(response=>{
        return response.json();
      })
        .then(data => {
            for(var i = 0; i < data.length; i++){
              // to store details of logged user
                localStorage.setItem("userType", data[i].userType);
                localStorage.setItem("email", data[i].email);
                localStorage.setItem("userId", data[i].userId);

                // to navigate to corresponding pages for admin and user
                if(data[i].userType == 'admin'){
                  window.location.href = 'admin/dashboard.html';
                }else{
                    window.location.href = 'dashboard.html';                    
                }
            }
        })
      .catch(error => {
        console.log(error);
      });
    }

// function to validate text fields in login
  function textValidation(){
      // to check if email is empty or not
      if(emailNode.value.trim() == ''){
        alert("Please Enter Email Address");
          emailNode.focus();
            return false;
        }
        // to check if password is empty or not
      if(passwordNode.value.trim() == ''){
          alert("Please Enter Password ");
            passwordNode.focus();
              return false;
          }    
        return true;      
    }

// function to check email is of standard type or not
function emailValidation(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailNode.value)){
        return true;
            }
      alert("You have entered an invalid email address!");
    return false;
  }

}