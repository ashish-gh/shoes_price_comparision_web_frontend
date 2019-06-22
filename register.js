
window.onload = function() {

    const button = document.getElementById('register');
  
    button.addEventListener('click', function() {
      const emialNode = document.getElementById('email');
      const passwordNode = document.getElementById('password');
      const email = emialNode.value;
      const password = passwordNode.value;
      const userType= "user";

      console.log(email,password);
      // create a http request similar to postman
      
      fetch('http://localhost:8005/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          userType: userType
        })
      })
      .then(data => {
        return data.json();
        console.log("first step");
      })
      .then(json => {
        if (json.status === 'success') {
          localStorage.setItem('Token', json.accessToken);
          window.location.href = 'index.html'
        } else {
          alert('user already exists');
          console.log("second step")
        }
      })
      .catch(error => {
        console.log(error)
      })
      
    })
    
}