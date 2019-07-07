window.onload = function() {
    console.log("we are going to get item");
    getData();

}

function getData(){
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

                txt+=' <div id="display-container-middle">'
                txt+=' <p class="shop-description">'
                txt+=' Ramesh Shoes '
                txt+=' </p>'
                txt+=' <p class="display-location">'
                txt+=' <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>                      '
                txt+=' Maitidevi, Kathmandu'
                txt+=' </p>'
                txt+=' <p class="shop-details">'
                txt+=' This is details about shop. Here we put extra details about store it features and its labels.'
                txt+=' </p>'
                txt+=' </div>'


// 
            txt +=' <div id="display-container-right"> '
            txt +=' <p class="shoes-brand"> '
            txt +=' '+ data.dataResult[i].shoesBrand+' '
            txt +=' </p> '
            txt +=' <p class="shoes-name"> '
            txt +=' ' + data.dataResult[i].shoesName+''
            txt +=' </p> '
            txt +=' <p class="shoes-price"> '
            txt +=' Rs. '+data.dataResult[i].shoesPrice+'  '
            txt +=' </p> '
            txt +=' <p class="shoes-deal" > '
            txt +=' <a onclick="setId('+data.dataResult[i].itemId+')" href="shoesDescription.html" >View > </a> '
            txt +=' </p>'                        
            txt +=' </div> '        
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
  // alert(shoesId);
}

// function getShop(shopId){
//     console.log("shopId  " + shopId);
//     var txt1='';      

//     fetch('http://localhost:3800/shop/'+shopId, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*'        
//         }
//       })
//       .then(response=>{
//         return response.json();
//       })
//       .then(data => {

          
//         for(var i=0; i<data.dataResult.length; i++){
//             console.log(data.dataResult[i].shopName);
     

//             document.getElementById("display-container-middle").innerHTML = txt1;         
//         }
//       })
//       .catch(error => {
//         console.log(error)
//     })   
// }