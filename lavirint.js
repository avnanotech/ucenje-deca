var lok=0;
var audio = new Audio('trk.mp3');
  function postavi(){
    var slk=document.createElement("img");
    slk.id="lik";
    document.getElementsByTagName("td")[0].appendChild(slk);
    document.getElementById("lik").src="slike/crvenkapa.png";
    document.getElementsByClassName("kont")[0].addEventListener("click", function(){
      audio.play();
      document.getElementsByTagName("td")[lok].style.backgroundColor="#aabbff"
      lok=lok-5;
        if(lok<0){lok=lok+5}
        else{ 
      document.getElementsByTagName("td")[lok].appendChild(slk); }
    });
    document.getElementsByClassName("kont")[0].style.backgroundImage="url(slike/strelica-gore.png)"
    document.getElementsByClassName("kont")[0].style.backgroundSize="cover"
    document.getElementsByClassName("kont")[1].addEventListener("click", function(){
	audio.play();
        document.getElementsByTagName("td")[lok].style.backgroundColor="#aabbff"
        lok--;
        if(lok<0){lok++}
        else{ 
        document.getElementsByTagName("td")[lok].appendChild(slk);} 
    });
    document.getElementsByClassName("kont")[1].style.backgroundImage="url(slike/strelica-levo.png)"
    document.getElementsByClassName("kont")[1].style.backgroundSize="cover"

    document.getElementsByClassName("kont")[2].addEventListener("click", function(){
	    document.getElementsByTagName("td")[0].appendChild(slk);
            lok=0;
            for(i=0;i<25;i++){
            document.getElementsByTagName("td")[i].style.backgroundColor="#ddeeff"
	    }           
    });
    document.getElementsByClassName("kont")[2].style.backgroundImage="url(slike/sunce.png)"
    document.getElementsByClassName("kont")[2].style.backgroundSize="cover"

    document.getElementsByClassName("kont")[3].addEventListener("click", function(){
        audio.play();
        document.getElementsByTagName("td")[lok].style.backgroundColor="#aabbff"
        lok++;
        if(lok>24){lok--}
        else{ 
        document.getElementsByTagName("td")[lok].appendChild(slk); }
    });
    document.getElementsByClassName("kont")[3].style.backgroundImage="url(slike/strelica-desno.png)"
    document.getElementsByClassName("kont")[3].style.backgroundSize="cover"
    document.getElementsByClassName("kont")[4].addEventListener("click", function(){
        audio.play();
        document.getElementsByTagName("td")[lok].style.backgroundColor="#aabbff"
        lok=lok+5;
        if(lok>24){lok=lok-5}
        else{ 
        document.getElementsByTagName("td")[lok].appendChild(slk); }
    });
    document.getElementsByClassName("kont")[4].style.backgroundImage="url(slike/strelica-dole.png)"
    document.getElementsByClassName("kont")[4].style.backgroundSize="cover"
  }
