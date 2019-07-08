// it is called when page gets loaded
window.onload = function() {
    // to get list of store 
      getStores();
    }
  
  // function to retrive data from database 
  function getStores(){
      var txt='';     
  
      fetch('http://localhost:3800/shop', {
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
              txt +='<td scope="row">'+data.dataResult[i].shopId +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].shopName +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].shopLocation +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].shopDescription +'</td>'
             
              txt +='<td><button class="btn btn-success" onclick="loadShopModel('+ data.dataResult[i].shopId+')"  data-toggle="modal" data-target="#myModal" ><span class="glyphicon glyphicon-refresh"></span> Edit</button></td>'
              txt +='<td><button class="btn btn-danger" onclick="deleteShopModel('+ data.dataResult[i].shopId+')" data-toggle="modal" data-target="#myModalDeleteShop"><span class="glyphicon glyphicon-trash"></span> Delete</button></td>'
              txt +='</tr>'           
                      txt +='</tbody>'
                txt+='</table>'
              document.getElementById("displayStore").innerHTML = txt;
            }
        })
          .catch(error => {
            console.log(error)
          });
  }
  