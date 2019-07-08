window.onload = function() {
    getData();
    getReview();

}

function getData(){
    var txt='';
    const shoesId = localStorage.getItem("itemId");

    fetch('http://localhost:3800/shoes/'+shoesId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'        
        }
      })
      .then(response=>{
        return response.json();
      })
      .then(data => {          
          if(data.status == 'success'){
              for(var i=0; i<data.dataResult.length ; i++){

                txt +=' <h4 id="shoesId">' + data.dataResult[i].itemId +' </h4>'
                txt +=' <h4>' + data.dataResult[i].shoesName +' </h4>'
                txt +=' <h4>' + data.dataResult[i].shoesBrand+' </h4>'
                txt +=' <h4>' + data.dataResult[i].shoesPrice+' </h4>'
                txt +=' <h4>' + data.dataResult[i].shoesDescription +' </h4>'
                txt +=' <h4>' + data.dataResult[i].shoesImageName +' </h4>'
                txt +=' <h4>' + data.dataResult[i].shopId +' </h4>'
                document.getElementById("shoesDetails").innerHTML = txt;

                getShopDescription(data.dataResult[i].shopId);
            }                          
          }else if(data.status = 'fail'){
              // alert("No data found");
          }
      })
      .catch(error =>{
          console.log("Error: " +error);
      })
}

function getShopDescription(shopId){
    var txt='';

    fetch('http://localhost:3800/shop/'+shopId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'        
        }
      })
      .then(response=>{
        return response.json();
      })
      .then(data => {
        if(data.status == 'success'){
            for(var i=0; i<data.dataResult.length ; i++){
                txt +=' <h4>' + data.dataResult[i].shopId +' </h4>'
                txt +=' <h4>' + data.dataResult[i].shopName +' </h4>'
                txt +=' <h4>' + data.dataResult[i].shopLocation+' </h4>'
                txt +=' <h4>' + data.dataResult[i].shopDescription+' </h4>'

                document.getElementById("shopDetails").innerHTML = txt;
            }
        }
      })
      .catch(error =>{
        console.log("Error: " +error);
    })
}


function getReview(){
    var txt='';
    fetch('http://localhost:3800/review/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'        
        }
      })
      .then(response=>{
        return response.json();
      })
      .then(data => {
        if(data.status == 'success'){
            
            for(var i=0; i<data.dataResult.length ; i++){
                txt +=' <h4>' + "shoes id " + data.dataResult[i].reviewId +' </h4>'
                txt +=' <h4>' + data.dataResult[i].review +' </h4>'
                txt +=' <h4>' + data.dataResult[i].reviewDate+' </h4>'
                txt +='<br>'

                document.getElementById("reviewDetails").innerHTML = txt;
            }
        }

      })
      .catch(error=>{
        console.log("Error : "+ error);        
      })
}


