window.onload = function() {
    console.log('first');
      fetch('http://localhost:8005/api/shoes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(data => {
        console.log("here")
        response=>response.json();
        // data=> console.log(data.json());
        // console.log(data);
        data=>console.log(data)
        console.log(data.shoesName);
        // shoesName = data.shoesName;
        // console.log("shoes Name" + shoesName);
      })
      .catch(error => {
        console.log(error)
      })
}