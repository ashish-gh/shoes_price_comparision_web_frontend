window.onload = function() {

  // to retrive values from form 
  const firstNameNode = document.getElementById('firstName');
  const lastNameNode = document.getElementById('lastName');
  const contactNumberNode = document.getElementById('contactNumber');
  const emialNode = document.getElementById('email');
  const passwordNode = document.getElementById('password');
  const confirmPasswordNode = document.getElementById('confirmPassword');

  // always set user type for logged user as 'user'
  // admin is set by default
  // and profile image is also set default
  const userType= "user";
  const profileImage ='profile.img';

// event listener start
  const button = document.getElementById('register');
    button.addEventListener('click', function() {
      
      // validation
      // check if text fields are empty or not
      if(textValidation()){
        // for first name
        if(stringValidation(firstNameNode.value)){
          // for last name
        if(stringValidation(lastNameNode.value)){        
        // check email validation
        if(contactValidation()){
          // check contact validation
          if(emailValidation()){
            // check password are same or not
            if(checkPassword()){
              // check password strength
              if(passwordValidation()){
                // check if user is registered or not
                  // if user is registered
                registerUser();
                clearText();        
              }
            }
          }
        }
      }
    }
  }    
});
//  event listener finished


// register start
function registerUser(){
        // request to handle register user
      fetch('http://localhost:3800/users/register', {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName:firstNameNode.value,
          lastName: lastNameNode.value,
          email: emialNode.value,
          contact:contactNumberNode.value,
          password: passwordNode.value,
          userType: userType,
          profileImage: profileImage,
        })
      })
      .then(data => {
        return data.json();
      })
      .then(json => {
        if (json.status === 'success') {
          alert('registered successfully');
          window.location.href ='../views/';
        } 
        else if(json.status == 'exists'){
          alert('user already exists');
        }
        else {
            alert('fail');
        }
      })
      .catch(error => {
        console.log(error);
    });      
}
// register end


// text validation start
function textValidation(){
  if(firstNameNode.value.trim() == ''){
    alert("Please Enter First Name");
    firstNameNode.focus();
    return false;
  }
  if(lastNameNode.value.trim() == ''){
    alert("Please Enter Last Name");
    lastNameNode.focus();
    return false;
  }
  if(contactNumberNode.value.trim() == ''){
    alert("Please Enter Contact Number");
    contactNumberNode.focus();
    return false;
  }
  
  if(emialNode.value.trim() == ''){
    alert("Please Enter Email");
    emialNode.focus();
    return false;
  }
  if(passwordNode.value.trim() == ''){
    alert("Please Enter Password");
    passwordNode.focus();
    return false;
  }
  if(confirmPasswordNode.value.trim() == ''){
    alert("Please Re-enter Password ");
    confirmPasswordNode.focus();
    return false;
  }
  return true;
}
// text validation end

// email validation start
  function emailValidation(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emialNode.value)){
        return (true);
        }
      alert("You have entered an invalid email address!");
    return false;
  }
// email validation end


// contact validation start
  function contactValidation(){
    var phoneno = /^\d{10}$/;
      if((contactNumberNode.value.match(phoneno))){
        return true;
        }
      else{
        alert("Please enter a valid number");
        contactNumberNode.focus();
        return false;
      }
    }
// contact validation end


// string validation start 
  function stringValidation(word){
    if (!/^[a-zA-Z]/.test(word)) {
      alert("Please enter valid name") 
      firstNameNode.focus();
      return false;  
    }
    return true;   
  }
// string validation end


// checkpassword start
  function checkPassword(){
    if(passwordNode.value == confirmPasswordNode.value){
      return true;
      }else{
        alert("Please enter same password");
        confirmPasswordNode.focus();
      return false;
    }
  }
// check password end

// password validation start
  function passwordValidation(){
    if(confirmPasswordNode.value >=6 && confirmPasswordNode.value <=10){
      alert("Password must be between 6 and 10 character long");
      passwordNode.focus();
      return false;
    }
    return true;
  }
// password validation end 
}