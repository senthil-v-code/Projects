(function(){

    const config = {
        apiKey: "AIzaSyD9TNqOPDvrhn6P5F5iSIS9Bz1X7DD9khg",
        authDomain: "dfdatabasedemo-bbyues.firebaseapp.com",
        databaseURL: "https://dfdatabasedemo-bbyues.firebaseio.com",
        storageBucket: "dfdatabasedemo-bbyues.appspot.com",
        
  };
  // Initialize Firebase
  firebase.initializeApp(config);


  //no. oh child under objects
  firebase.database().ref('object').on('value',(snap) => {
    var totalRecord = snap.numChildren();
    console.log("Total Record = "+totalRecord);
  });

  //Get elements
  const preObject = document.getElementById('data');

  //create refrences
  const dbRefObject = firebase.database().ref().child('data'); 


  //sync object changes
  dbRefObject.on('value',snap => {

    preObject.innerText = JSON.stringify(snap.val(),null,3);
    //document.write(preObject.innerHTML);
  });



}());