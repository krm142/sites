

// .JS file for executing the firebase query


 var config = {
    apiKey: "AIzaSyDFk5bO_FFocV20gfj3t8mU3C5KFt8WQpQ",
    authDomain: "swite-76bd2.firebaseapp.com",
    databaseURL: "https://swite-76bd2.firebaseio.com",
    projectId: "swite-76bd2",
    storageBucket: "swite-76bd2.appspot.com",
    messagingSenderId: "986899615116"
  };

firebase.initializeApp(config);


function getdetails(argument) {
  // body...




var input = document.getElementById("site_id").value;
var input_final = input.toUpperCase();


//window.alert (input_final) ;




  
    


  var ref = firebase.database().ref("/").orderByChild("01-SITEID").equalTo(input_final)







  ref.on("child_added", function(snapshot) {


    

  var obj = JSON.stringify(snapshot.val());

  //document.getElementById('textarea').value += obj + " ";
  var str = obj.replace (/"/g ,"").replace (/:/g, " <==> ").replace (/{/g, "").replace(/}/g, "").replace(/,/g, "\n").replace(/]/g, "");

      // var str1 == (null); window.alert("Please Enter") ;
  
  document.getElementById("output").innerHTML =  str ;



  // firebase.database().goOffline();




},);

}


  // console.log(snapshot.val());

 //function (error) {
   //console.log("Error: " + error.code);
//});
