window.onload = function() {
  

  const id = localStorage.getItem("userId");
  console.log("usre id " + id); 
    
  var txt='';      

    fetch('http://localhost:3800/users/'+id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response=>{
          return response.json();
        })
        .then(data => {        

          console.log(data);
          for(var i = 0; i < data.dataResult.length; i++){

            txt +=' <div class="form-label-group"> + '
            txt =' <label for="inputEmail">First Name</label>'
            txt +=' <input type="text" id="firstName" class="form-control"  value="'+ data.dataResult[i].firstName+'" placeholder="First "Name required autofocus>'
            txt+= '</div> '
            
            txt +=' <div class="form-label-group"> '
            txt +=' <label for="inputEmail">Last Name</label>'
            txt +=' <input type="text" id="lastName" class="form-control" value="'+data.dataResult[i].lastName+'" placeholder="First "Name required autofocus>'
            txt+= '</div> '
            
            txt +=' <div class="form-label-group">  '
            txt +=' <label for="inputEmail">Email</label>'
            txt +=' <input type="text" id="email" class="form-control" value="'+data.dataResult[i].email+'" placeholder="First "Name required autofocus>'
            txt+= '</div> '
            
            txt +=' <div class="form-label-group"> '
            txt +=' <label for="inputEmail">Contact</label>'
            txt +=' <input type="number" id="contactNumber" class="form-control" value="'+data.dataResult[i].contact+'" placeholder="First "Name required autofocus>'
            txt+= '</div> '
            
            txt +=' <div class="form-label-group"> '
            txt +=' <label for="inputEmail">Password</label>'
            txt +=' <input type="password" id="password" class="form-control" value="" placeholder="Password " required autofocus>'
            txt+= '</div> '
            
            txt +=' <div class="form-label-group"> '
            txt +=' <label for="inputEmail">Confirm Password</label>'
            txt +=' <input type="password" id="confirmPassword" class="form-control" value="" placeholder="Confirm Password" required autofocus>'
            txt+= '</div>'

            txt += '<br>'
            txt+= '<button class="btn btn-lg btn-dark btn-block" type="submit" onclick="updateProfile('+ data.dataResult[i].userId+')" >Update</button>'

            document.getElementById("signIn").innerHTML = txt;

          }            
      })
        .catch(error => {
          console.log(error)
  })
}

function updateProfile(userId){

  var phoneno = /^\d{10}$/;


  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const contact = document.getElementById("contactNumber");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  


  // validation
  if(textValidation()){
    // 
    if((contact.value.match(phoneno))){
      // 
      if(emailValidation()){
        // check password are same or not
        if(checkPassword()){
          // check password strength
          if(passwordValidation()){
            fetch('http://localhost:3800/users/'+userId, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value,
              contact: contact.value,
              password:password.value,
              userType:"admin",
              profileImage:"profile.png"
            })
            })
            .then(data => {
              return data.json();
            })
            .then(json => {
              if (json.status === 'success') {
                alert("Profile Updated");
              } else {
                alert('Not updated');
              }
            })
            .catch(error => {
              console.log(error)
          })
        }
       }
      }
      }else{
          alert("Please enter a valid number");
          contact.focus();
          return false;
      
        }
    }
}


function textValidation(){
  if(firstName.value.trim() == ''){
    alert("Please Enter First Name");
    firstName.value.focus();
    return false;
  }
  if(lastName.value.trim() == ''){
    alert("Please Enter Last Name");
    lastName.focus();
    return false;
  }


  if(email.value.trim() == ''){
    alert("Please Enter Email");
    email.focus();
    return false;
  }
  if(password.value.trim() == ''){
    alert("Please Enter Password");
    passwordNode.focus();
    return false;
  }
  if(confirmPassword.value.trim() == ''){
    alert("Please Re-enter Password ");
    confirmPassword.focus();
    return false;
  }
  return true;
}

function contactValidation(){
  var phoneno = /^\d{10}$/;
  if((contact.value.match(phoneno))){
      return true;
    }
      else{
      alert("Please enter a valid number");
      contact.focus();
      return false;
  }
}

function emailValidation(){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
      return (true);
      }
        alert("You have entered an invalid email address!");
      return false;
}



function checkPassword(){
  if(password.value == confirmPassword.value){
    return true;
  }else{
    alert("Please enter same password");
    confirmPassword.focus();
    return false;
  }
}

function passwordValidation(){
  if(password.value >=6 && confirmPassword.value <=10){
    alert("Password must be between 6 and 10 character long");
    password.focus();
    return false;
  }
  return true;
}


  