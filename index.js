  function toggleNav(){
   var currentWidth = document.getElementById("mySidenav").style.width 
      if(currentWidth === '0px'){
        document.getElementById("mySidenav").style.width = "250px";
      }
      else{
        document.getElementById("mySidenav").style.width = "0px";
      }
  }
  function closeNav(){
    document.getElementById("mySidenav").style.width = "0px";
  }

//   slider starts here