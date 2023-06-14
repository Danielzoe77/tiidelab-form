 var nameError = document.getElementById("first-error");
 var middleError = document.getElementById("middle-error");
 var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");



// // -------validation of firstname
 function passName(){
     var name = document.getElementById("firstname").value;

   if(name.length === 0){
       nameError.innerHTML = "Name is required";
        return false;
   }
    if ( name.length <=3){
       nameError.innerHTML ='<i class="fa fa-exclamation-circle"></i>';
         return false;
     }
    
     nameError.innerHTML ="<i class='fa fa-check-circle'></i>";
     return true;
 }
 function middleName(){
     var miname = document.getElementById("middlename").value;

     if(miname.length === 0){
         nameError.innerHTML = "Name is require";
         return false;
     }
     if ( miname.length <=3){
         nameError.innerHTML ='<i class="fa fa-exclamation-circle"></i>';
         return false;
     }
    
     nameError.innerHTML ='<i class="fa fa-check-circle" nameError.style.color=" aqua";></i>' ;
     return true;
     }
 function validateEmail(){
     var email = document.getElementById("contact-email").value;

   if(email.length == 0){
         emailError.innerHTML ="Email is required";
         return false;
     }
     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
         emailError.innerHTML = '<i class="fa fa-exclamation-circle"></i>';
         return false;
     }
     emailError.innerHTML = "<i class='fa fa-check-circle'></i>";
     return true;
}

 function  validateform(){
     if (!passName() || !middleName() || !validateEmail()  ){
         submitError.style.display = "block";
         submitError.innerHTML = "please fix error to submit";
         setTimeout(function(){
             submitError.style.display = "none";},3000 );
         return false;
     }
 }


// function myform(){
//     let fName = document.getElementById("firstname").value;
//     let lName = document.getElementById("lastname").value;
    

// let mName = document.getElementById("middlename").value;


// let Dob = document.getElementById("dob").value;


// let streets= document.getElementById("street").value;



// let citys= document.getElementById("city").value;


// // let contry= document.getElementById("country").value;
// let contry = document.getElementById("country").value;



// let zicode= document.getElementById("zipcode").value;


// let emaill= document.getElementById("contact-email").value;


// let state= document.getElementById("states").value;

// let submits= document.getElementById("submit").value;
   
// }
//------------------ localstorage
// function myform(event){
//     event.preventDefault();
//     var name = document.getElementById("firstname").value;
//     var miname = document.getElementById("middlename").value;
//     let lName = document.getElementById("lastname").value;
//     let Dob = document.getElementById("dob").value;
//     let streets= document.getElementById("street").value;
//     let citys= document.getElementById("city").value;
//     var email = document.getElementById("contact-email").value;

//     localStorage.setItem("is_firstname", firstname);
//     localStorage.setItem("is_middlename", miname);
//     localStorage.setItem("is_lastName", lName);
//     localStorage.setItem("is_dob", Dob);
//     localStorage.setItem("is_street", streets);
//     localStorage.setItem("is_city", citys);
// }

//  const myform = e =>{ 
//      let name = document.getElementById("firstname").value;
//   let miname = document.getElementById("middlename").value;
//   let formData = JSON.parse(localStorage.getItem("formData")) || [];
//   formData.push({name,miname});
//   localStorage.setItem('formData', JSON.stringify(formData));
//   dispData();
//   e.preventDefault();

// }