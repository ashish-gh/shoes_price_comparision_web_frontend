window.onload = function() {


    const button = document.getElementById('register');
  
    button.addEventListener('click', function() {
      const emailNode = document.getElementById('email');
      const passwordNode = document.getElementById('password');
      const email = emailNode.value;
      const password = passwordNode.value;
      
      console.log("alert");

      // create a http request similar to postman
      fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(data => {
        data.json()
        .then(actualData => {
          fetch('http://localhost:8000/api/users')
          .then(data => {
            data.json()
            .then(data => {
              const users = data.data;
              document.write(users.map(user => user.email));
            })
          })
        })
      
      })
      .catch(error => {
        button.innerText = 'could not register'
        console.log(error)
      })
      
    })
  }