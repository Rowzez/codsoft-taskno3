var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }

var sidemenu = document.getElementById("sidemenu");

        function openMenu(){
            sidemenu.style.right = "0";
        }
        function closeMenu(){
            sidemenu.style.right = "-200px";
        }
