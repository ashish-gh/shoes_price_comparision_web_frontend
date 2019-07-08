window.onload = function() {
  getShoes();

}

function getShoes(){
  var txt='';      
  fetch('http://localhost:3800/shoes', {
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
      //   console.log(data.dataResult);
        for(var i =0; i<data.dataResult.length; i++){
            console.log(data.dataResult[i].shoesName);
            
          txt +='<div id="card-container"  >'              
          txt +=' <div id="display-container">'
          txt +='    <div id="display-container-left">'
          txt +='       <div id="image-container">'
          txt +='        <img id="image-display" src="" alt="'+ data.dataResult[i].shoesImageName +'">'                            
          txt +='       </div>'
          txt +='    </div>'
// fetch data from shop table

          txt+='<div id="display-container-middle">'
          txt+='          <p class="shop-description" >'
          txt+='    '+ data.dataResult[i].shoesBrand+' '
          txt+='    </p>'
          txt+='    <p class="display-location" >'
          txt+='    '+ data.dataResult[i].shoesName+' '
          txt+='    </p>'
          txt+='    <p class="shop-details" >'
          
          txt+='      <span class="glyphicon glyphicon-tags" aria-hidden="true" style="margin-right:5px;"></span>'                      
          txt+='    '+  data.dataResult[i].shoesPrice+' '
          txt+='    </p>'
          txt+='  </div>'
  
// shoes display container right  
          txt +=' <div id="display-container-right">' 
          txt +=' <p class="shoes-deal" style="margin-top:15%; "> '
          txt +=' <a onclick="setId('+data.dataResult[i].itemId+')" href="shoesDescription.html" >View > </a>' 
          txt +='</p>'
          txt +='</div> '
          txt +=' </div> '
          txt +=' </div> '
          txt +=' <br> '
          
          document.getElementById("col-8").innerHTML = txt;             
        }        
  })
  .catch(error => {
      console.log(error)
  });
}

function setId(shoesId){
localStorage.setItem('itemId',shoesId);
}


function getShopById(shopId){
    fetch('http://localhost:3800/shop/'+shopId, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(data => {
        return data.json();
    })
    .then(json => {
        if (json.status === 'success') {
            console.log("data retreived");
            for (var i=0; i< json.dataResult.length; i++){
                document.getElementById("shopNameMiddle").value = json.dataResult[i].shopName;
                // document.getElementById("col-8").innerHTML = txt;             
            }
          }  
    })
    .catch(error=>{
        console.log(error);        
    });
}
