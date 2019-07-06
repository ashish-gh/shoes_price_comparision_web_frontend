window.onload = function() {

  
    get_Data();
  
  
    function get_Data(){
          let html='',
          newtr = document.createElement( "tr" ),
          existingbody = document.getElementById( "displayStore" );     
          $.ajax({
         type:'GET',
         dataType:'JSON',       
          url:'http://localhost:8005/api/store',
          success:function(data){
              // console.log(data);
              $.each(data, function(data,value) {          
                  html +='<tr><td>'+value.storeId+'</td>'+
                  '<td>'+value.storeName+'</td>' +
                  '<td>'+value.latitude+'</td>'+
                  '<td>'+value.longitude+'</td>'+
                  '<td>  <a class="delete" id="delete" onclick="delete_contact('+ value.storeId +');" ><i class="material-icons"  data-toggle="modal" data-target="#myModal">&#xE254;</i></a>'+
                  '<td>  <a class="delete" id="delete" onclick="delete_contact('+ value.storeId +');" ><i class="material-icons"  data-toggle="modal" data-target="#myModal">&#xE254;</i></a>'+
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
}
    