window.onload = function() {

    const button = document.getElementById('addShoes');
  
    button.addEventListener('click', function() {
      const shoesBrandNode = document.getElementById('shoesBrand');
      const shoesNameNode = document.getElementById('shoesName');
      const shoesPriceNode = document.getElementById('shoesPrice');
      const shoesDescriptionNode = document.getElementById('shoesDescription');
      const shoesImageNameNode = document.getElementById('shoesImageName');
      
      const shoesBrand = shoesBrandNode.value;
      const shoesName = shoesNameNode.value;
      const shoesPrice = shoesPriceNode.value;
      const shoesDescription = shoesDescriptionNode.value;
      const shoesImageName = shoesImageNameNode.value;

      console.log(shoesBrand,shoesName, shoesPrice, shoesDescription, shoesImageName);
      // create a http request similar to postman
      
      fetch('http://localhost:8005/api/shoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shoesBrand: shoesBrand,
          shoesName: shoesName,
          shoesPrice: shoesPrice,
          shoesDescription: shoesDescription,
          shoesImageName: shoesImageName
        })
      })
      .then(data => {
        return data.json();
      })
      .then(json => {
        if (json.status === 'success') {
            alert('shoes added successfully');
        } else {
          alert('shoes not added successfullys');
        }
      })
      .catch(error => {
        console.log(error)
      })
      
    })
    
}