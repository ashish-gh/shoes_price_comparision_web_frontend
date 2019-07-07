window.onload = function() {

    // check if user is registerd or not
    // redirect to index page
    if(localStorage.getItem("Token") == null ){
        window.location.href = '../index.html'
    }

    const userId = localStorage.getItem("userId");   
    getUserById(userId);



}

// function start 
function getUserById(userId){
    fetch('http://localhost:3800/users/'+userId, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response=>{
          return response.json();
        })
        .then(data => {
            if(data.status == 'success'){
                for (var i=0; i< data.dataResult.length; i++){            
                document.getElementById("firstName").value = data.dataResult[i].firstName;
                document.getElementById("lastName").value = data.dataResult[i].lastName;                                        
                document.getElementById("email").value = data.dataResult[i].email;                                        
                document.getElementById("contactNumber").value = data.dataResult[i].contact;                                        
                }
            }
        })
        .catch(error=>{
            console.log(error);            
    });    
}
// function end


      