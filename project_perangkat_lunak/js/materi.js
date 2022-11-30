function ftampil(){
	/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}

window.onscroll = function(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
	  document.getElementById("js-top").style.display = "block";
	} else{
	  document.getElementById("js-top").style.display = "none";
	}
  };

function tujuan(tujuan) {
    var x = document.getElementById(tujuan);
  
    if (x.className.indexOf("hilang") == -1) {
      x.className += " hilang";
    } else {
      x.className = x.className.replace("hilang", "");
    }
}

function apersepsi(apersepsi) {
    var x = document.getElementById(apersepsi);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  function tts(tts) {
    var x = document.getElementById(tts);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }