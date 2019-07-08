window.onload = function() {

  getUsers();
}

function getUsers(){
  var txt='';      
  fetch('http://localhost:3800/users', {
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
          txt +='<td scope="row">'+data.dataResult[i].userId +'</td>'
          txt +='<td scope="row">'+data.dataResult[i].firstName +'</td>'
          txt +='<td scope="row">'+data.dataResult[i].lastName +'</td>'
          txt +='<td scope="row">'+data.dataResult[i].email +'</td>'
         
                  txt +='<td><button class="btn btn-danger" onclick="deleteUserModel('+ data.dataResult[i].userId+')" data-toggle="modal" data-target="#myModalDeleteUser"><span class="glyphicon glyphicon-trash"></span>  Delete</button></td>'
                  txt +='</tr>'           
                  txt +='</tbody>'
            txt+='</table>'
          document.getElementById("displayUser").innerHTML = txt;
        }
    })
      .catch(error => {
        console.log(error)
      });
}
    



// function myFunction(userId){
// alert(userId)
  
// }


    //   <tbody id="displayUser">                
    //   <tr>
    //   </tr>           
    // </tbody>
    

      


      // const deleteB = document.getElementById("deeleteUser");
      // deleteB.addEventListener('click', delete_contact(4));

      // delete_contact(4);
   
    


      // to delete
  //   function onClick(event) {

      	
	// 	const userId=$("#cdelid").val();      
  //   $.ajax({
  //     type:'DELETE',
  //   dataType:'JSON',
  //   data:{cid:cid},
      
  //      url:'http://localhost:3000/deletecontact',
  //  success:function(data){
  //    if(data==='yes')
  //          {
  //      alert("Deleted");
  //      get_Data();
  //          }
  //  }
  //   });

      
      
      // console.log("here i am");
        
      //   // const userId = document.getElementById('deleteUser');
      //   fetch('http://localhost:8005/api/users', {
      //     crossDomain:true,
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   body: JSON.stringify({
      //     userId: 11
      //   })
      // })
      // .then(data=>{
      //   return data.json();
      // })
      // .then(json=>{
      //   console.log(json);
      //   // check status
      //   if(json.status =='success'){
      //     // alert user data is deleted
      //     alert("Deleted");
      //     // load new data  
      //   }else{
      //     alert("Not deleted");
      //   }

      // })
      // .catch(error => {
      //   console.log(error)
      // })
      // console.log("again");


    // const deleteButton = document.getElementById('delete');
    // deleteButton.addEventListener('click', onClick)


      




