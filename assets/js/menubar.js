
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("dark-bg").style.display = 'block';
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("dark-bg").style.display = 'none';
  }
  function openNav2() {
    document.getElementById("mySidenav-2").style.width = "280px";
    document.getElementById("dark-bg").style.display = 'block';
  }
  
  function closeNav2() {
    document.getElementById("mySidenav-2").style.width = "0";
    document.getElementById("dark-bg").style.display = 'none';
  }

  //header search click to expand 
  $(document).ready(function () {
    $(".cs-btn-submit").click(function() {
      $(".cs-txt-livesearch").toggleClass("sopen")
    })
  })
