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

                txt +=' <h4> Brand : ' + data.dataResult[i].shoesName +' </h4>'
                txt +=' <h5> Name: ' + data.dataResult[i].shoesBrand+' </h5>'
                txt +=' <h5> Price : ' + data.dataResult[i].shoesPrice+' </h5>'
                txt +=' <h6> Description : '  + data.dataResult[i].shoesDescription +' </h6>'
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
                txt +=' <h4> <span class="glyphicon glyphicon-home"></span> ' + data.dataResult[i].shopName +' </h4>'
                txt +=' <h5> <span class="glyphicon glyphicon-map-marker"></span> ' + data.dataResult[i].shopLocation+' </h5>'
                txt +=' <h5 style="margin-left:20px;"> ' + data.dataResult[i].shopDescription+' </h5>'

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
                txt +=' <h4>' + data.dataResult[i].review +' </h4>'
                txt +=' <h5>  <span class="glyphicon glyphicon-time"></span> ' + data.dataResult[i].reviewDate+' </h5>'
                txt +='<br>'

                document.getElementById("reviewDetails").innerHTML = txt;
            }
        }

      })
      .catch(error=>{
        console.log("Error : "+ error);        
      })
}


