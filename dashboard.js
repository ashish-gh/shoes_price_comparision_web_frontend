window.onload = function() {
  function onClick(event) {
    fetch('http://localhost:8000/api/users', {
      headers: {
        "Authorization": localStorage.getItem('Token')
      }
    })
      .then(data => {
        return data.json()
      })
      .then(json => {
        console.log(json);
        if (json.status === 'fail' && json.code === 404) {
          window.location.href = 'index.html';
        }
        if (json.status === 'success') {
          alert(json.data.toString());
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  const userButton = document.getElementById('users');
  userButton.addEventListener('click', onClick)
}