// to load review when page gets loaded
window.onload = function() {
    getReviews();
}
  
  function getReviews(){
    var txt='';      
    fetch('http://localhost:3800/review', {
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
            txt +='<td scope="row">'+data.dataResult[i].reviewId +'</td>'
            txt +='<td scope="row">'+data.dataResult[i].review +'</td>'
            txt +='<td scope="row">'+data.dataResult[i].reviewDate +'</td>'
           
                    txt +='<td><button class="btn btn-danger" onclick="deleteReviewModel('+ data.dataResult[i].reviewId+')" data-toggle="modal" data-target="#myModalDeleteReview"> <span class="glyphicon glyphicon-trash"> Delete</span></button></td>'
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
      
  
