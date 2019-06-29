window.onload = function() {

  
  get_Data();


  function get_Data(){
		let html='',
		newtr = document.createElement( "tr" ),
        existingbody = document.getElementById( "displayUser" );     
		$.ajax({
       type:'GET',
       dataType:'JSON',       
        url:'http://localhost:8005/api/users',
        success:function(data){
            // console.log(data);
            $.each(data, function(data,value) {          
                html +='<tr><td>'+value.userId+'</td>'+
                '<td>'+value.firstName+'</td>' +
                '<td>'+value.lastName+'</td>'+
                '<td>'+value.email+'</td>'+
        '<td>  <a class="delete" id="delete" onclick="delete_contact('+ value.userId +');" ><i class="material-icons"  data-toggle="modal" data-target="#myModal">&#xE254;</i></a>'+
				  '</tr>';
            });
            $( "tbody" ).append( html, [ newtr, existingbody ] );        
        }        
	});
}

const button = document.getElementById('deleteUser');
button.addEventListener('click', function() {
  const userId=$("#cdelid").val();      

  console.log("this is  userid : " + userId);
  $.ajax({
    type:'DELETE',
  dataType:'JSON',
  data:{userId:userId},
    
     url:'http://localhost:8005/api/:userId',
 success:function(data){
   if(data==='yes')
         {
     alert("Deleted");
     get_Data();
         }
 }
  });
 });


 const deleteClick = document.getElementById('delete');
 deleteClick.addEventListener('click', function(){
  // console.log("user id  + " + id);
  // $('[id="cdelid"]').val(id);

  // alert()
 });
 
      function delete_contact(id){
        alert(id)
        console.log("user id  + " + id);
          $('[id="cdelid"]').val(id);
         }


  

    









  // var txt,myObj='';      
  // fetch('http://localhost:8005/api/users', {
  //       crossDomain:true,
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*'        }
  //     })
  //     .then(response=>{
  //       return response.json();
  //     })
  //     .then(data => {

  //       for(var i =0; i < data.length; i++){              
               
  //         txt +='<th scope="row">'+data[i].userId +'</th>'
  //         txt +='<td>'+ data[i].firstName  +'</td>'
  //         txt +='<td>'+ data[i].lastName +'</td>'
  //                 txt +='<td>' + data[i].email+'</td>'
  //                 txt +='<td><a id="deleteUser" data-toggle="modal" data-target="#myModal" href="delete.html?'+data[i].userId+'"> Delete </a></td>'
  //                 txt +='</tr>'           
  //                 txt +='</tbody>'
  //           txt+='</table>'
  //         document.getElementById("displayUser").innerHTML = txt;
  //       }
  //   })
  //     .catch(error => {
  //       console.log(error)
  //     })


   
      // function delete_contact(id){
      //     $('[id="cdelid"]').val(id);
      //    }

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


      


}

