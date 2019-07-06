window.onload = function() {
    const userId = 10;
    var txt,myObj='';      
    fetch('http://localhost:8005/api/users/:userId', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response=>{
          return response.json();
        })
        .then(data => {
  
          for(var i =0; i < data.length; i++){              
                 
            txt +='<th scope="row">'+data[i].userId +'</th>'
            txt +='<td>'+ data[i].firstName  +'</td>'
            txt +='<td>'+ data[i].lastName +'</td>'
                    txt +='<td>' + data[i].email+'</td>'
                    txt +='<td><a id="deleteUser" data-toggle="modal" data-target="#myModal" href="delete.html?'+data[i].userId+'"> Delete </a></td>'
                    txt +='</tr>'           
                    txt +='</tbody>'
              txt+='</table>'
            document.getElementById("displayUser").innerHTML = txt;
          }
      })
        .catch(error => {
          console.log(error)
        })
  
        // to delete
      function onClick(event) {
          console.log("here i am");
          
          // const userId = document.getElementById('deleteUser');
          fetch('http://localhost:8005/api/users', {
            crossDomain:true,
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
            userId: 11
          })
        })
        .then(data=>{
          return data.json();
        })
        .then(json=>{
          console.log(json);
          // check status
          if(json.status =='success'){
            // alert user data is deleted
            alert("Deleted");
            // load new data  
          }else{
            alert("Not deleted");
          }
  
        })
        .catch(error => {
          console.log(error)
        })
        }
  
  console.log("again");
  
  
      // const deleteButton = document.getElementById('delete');
      // deleteButton.addEventListener('click', onClick)
  }
  
  