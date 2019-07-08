// to load review when page gets loaded
window.onload = function() {

    console.log("to load review by user");
    
      // to get userId for logged user
      const userId = localStorage.getItem("userId");
      getReviewByUser(userId);
  
  }
    
    function getReviewByUser(userId){
      var txt='';      
      fetch('http://localhost:3800/review/'+userId+'/user', {
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
            console.log(data);
            for(var i =0; i < data.dataResult.length; i++){                             
              txt +='<td scope="row">'+data.dataResult[i].reviewId +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].review +'</td>'
              txt +='<td scope="row">'+data.dataResult[i].reviewDate +'</td>'
             
                      txt +='<td><button class="btn" onclick="deleteReviewModel('+ data.dataResult[i].reviewId+')" data-toggle="modal" data-target="#myModalDeleteReview" >Delete</button></td>'
                      txt +='</tr>'           
                      txt +='</tbody>'
                txt+='</table>'
              document.getElementById("displayReview").innerHTML = txt;
            }
        })
          .catch(error => {
            console.log(error)
          });
    }
        
    
  