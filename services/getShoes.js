// it is called when page gets loaded
window.onload = function() {
    // to get list of shoes 
    console.log("to get shoes");
    
      getShoes();
    }
  
  // function to retrive data from database 
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
            
            for(var i =0; i < data.dataResult.length; i++){                             
              txt +='<td scope="row">'+data.dataResult[i].itemId +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].shoesBrand +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].shoesName +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].shoesPrice +'</td>'            
              txt +='<td scope="row">'+data.dataResult[i].shoesDescription +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].shoesImageName+'</td>'           
              txt +='<td scope="row">'+data.dataResult[i].shopId +'</td>'
              
              txt +='<td><button class="btn btn-success" onclick="loadShoesModel('+ data.dataResult[i].itemId+')"  data-toggle="modal" data-target="#myModalEditShoes" ><span class="glyphicon glyphicon-refresh"></span> Edit</button></td>'
              txt +='<td><button class="btn btn-danger" onclick="deleteShoesModel('+ data.dataResult[i].itemId+')" data-toggle="modal" data-target="#myModalDeleteShoes"><span class="glyphicon glyphicon-trash"></span> Delete</button></td>'
              txt +='</tr>'           
                      txt +='</tbody>'
                txt+='</table>'
              document.getElementById("displayShoes").innerHTML = txt;
            }
        })
          .catch(error => {
            console.log(error)
          });
  }
  
  // function loadShoesModel(id){
    // console.log(id);
    
  // }
  