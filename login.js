window.onload = function() {

    const button = document.getElementById('login');
  
    button.addEventListener('click', function() {
      const emialNode = document.getElementById('email');
      const passwordNode = document.getElementById('password');
      const email = emialNode.value;
      const password = passwordNode.value;
      
      console.log(email,password);
      // create a http request similar to postman
      
      fetch('http://localhost:8005/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(data => {
        alert('user not found');
        return data.json();
      })
      .then(json => {
        if (json.status === 'success') {
          localStorage.setItem('Token', json.accessToken);
          window.location.href = 'dashboard.html'
        } else {
          alert('user not found');
        }
      })
      .catch(error => {
        console.log(error)
      })
      
    })
    
  }