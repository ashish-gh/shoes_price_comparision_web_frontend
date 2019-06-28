window.onload = function() {
  
  var txt,myObj='';

      fetch('http://localhost:8005/api/users', {
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
                  txt +='<td><a data-toggle="modal" data-target="#myModal" href="delete.html?'+data[i].userId +'">Delete</a></td>'
                  txt +='</tr>'           
                  txt +='</tbody>'
            txt+='</table>'
          document.getElementById("displayUser").innerHTML = txt;
        }
    })
      .catch(error => {
        console.log(error)
      })
}

