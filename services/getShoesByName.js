

const button = document.getElementById("searchShoes");
button.addEventListener('click', loadShoes);

function loadShoes(){
    const shoesNameNode = document.getElementById("shoesName");
        
    // text validation
    if(textValidatation(shoesNameNode)){
        searchShoes(shoesNameNode)
    }  
}


// function to validate if name of shoes text field is empty or not
function textValidatation(shoesName){
    if(shoesName.value.trim() == ''){
        alert("Please Enter Shoes Name");
        shoesName.focus();
        return false;
      }
    return true;
}



// function to search shoes

function searchShoes(shoesNameNode){
    var txt='';     
    const shoesName = shoesNameNode.value;

    fetch('http://localhost:3800/shoes/'+shoesName+'/shoes', {
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
          for(var i=0; i< data.dataResult.length ; i++){
// load search data
                    
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
                txt +=' <a href="shoesDescription.html">View > </a> '
                txt +=' </p>'                        
                txt +=' </div> '        
                txt +=' </div> '
                txt +=' </div> '
                txt +=' <br> '

                document.getElementById("col-8").innerHTML = txt;         

          }
          }else if(data.status=='fail'){
              alert("No shoes found !!!")
              shoesNameNode.focus();
          }
      })
      .catch(error=>{
            console.log(error);            
      })
}