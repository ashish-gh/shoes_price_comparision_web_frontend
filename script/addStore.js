window.onload = function() {

    const button = document.getElementById('addStore');
  
    button.addEventListener('click', function() {
      const storeNameNode = document.getElementById('storeName');
      const latitudeNode = document.getElementById('latitude');
      const longitudeNode = document.getElementById('longitude');
      
      const storeName = storeNameNode.value;
      const latitude = latitudeNode.value;
      const longitude = longitudeNode.value;
      
      console.log(storeName,latitude,longitude);
      // create a http request similar to postman
      
      fetch('http://localhost:8005/api/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          storeName: storeName,
          latitude: latitude,
          longitude: longitude
        })
      })
      .then(data => {
        return data.json();
      })
      .then(json => {
        if (json.status === 'success') {
            alert('store added successfully');
        } else {
          alert('store not added successfully');
        }
      })
      .catch(error => {
        console.log(error)
      })
      
    })
    
}