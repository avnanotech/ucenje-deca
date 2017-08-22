     var maska=[];
     var imglink="";
     var imind=0; 
        var zivotinje = ["sl_kokoska.jpg", "sl_konj.jpg", "sl_koza.jpg", "sl_krava.jpg", "sl_maca.jpg", "sl_magarac.jpg", "sl_ovca.jpg", "sl_pas.jpg", "sl_patka.jpg", "sl_prase.jpg", "sl_zec.jpg", "sl_gorila.jpg", "sl_lav.jpg", "sl_lisica.jpg", "sl_medved.jpg", "sl_slon.jpg", "sl_sova.jpg", "sl_tigar.jpg", "sl_vuk.jpg", "sl_zebra.jpg", "sl_zirafa.jpg", "sl_zmija.jpg"];
     function start(){
        var glv=document.createElement("header");
        document.body.appendChild(glv);
        var txgl="SLAGALICA";
// IKONA SA DETELINOM
        var imdet=document.createElement("img");
        imdet.setAttribute("src","slike/detelina-logo.png");
        imdet.style.width="48px"; 
        imdet.style.height="48px"; 
        glv.appendChild(imdet);
        for(i=0;i<txgl.length;i++){
// ŠARENA SLOVA U NALSOVU                
            var alb=document.createElement("a");
            alb.innerHTML=txgl.charAt(i);  
            alb.style.color="rgb("+Math.floor((Math.random()*140) + 85)+","+Math.floor((Math.random()*140) + 85)+","+Math.floor((Math.random()*140) + 85)+")"
            alb.style.fontSize="36pt"
            alb.style.fontWeight="bold"
            glv.appendChild(alb);
// IKONA SA DETELINOM
            var imdet=document.createElement("img");
            imdet.setAttribute("src","slike/detelina-logo.png");
            imdet.style.width="48px"; 
            imdet.style.height="48px"; 
            glv.appendChild(imdet);

       } 
// MENI SA SLIKAMA ŽIVOTINJA
       var navv=document.createElement("nav");
       document.body.appendChild(navv);
// IKONICA ZA NAVIGACIJU
       var inavv=document.createElement("img");
       inavv.setAttribute("class","imnnav");
       inavv.setAttribute("src","slike/strelica-levo.png");
       inavv.style.backgroundColor= "#444444"
       navv.appendChild(inavv);      
       for(i=0;i<16;i++){
// IKONICE ŽIVOTINJA
           var inavv=document.createElement("img");
           inavv.setAttribute("class","imnav");
           inavv.setAttribute("src","slike/"+zivotinje[i]);
           inavv.setAttribute("onclick","imglink='"+"slike/"+zivotinje[i]+"';mesanje();");
           navv.appendChild(inavv);
       } 
// IKONICA ZA NAVIGACIJU
       var inavv=document.createElement("img");
       inavv.setAttribute("class","imnnav");
       inavv.setAttribute("src","slike/strelica-desno.png");
       inavv.style.backgroundColor= "#444444";
       navv.appendChild(inavv);      
       document.getElementsByClassName("imnnav")[0].setAttribute("onclick","pomeri(-1)");
       document.getElementsByClassName("imnnav")[1].setAttribute("onclick","pomeri(1)");


// KONSTRUKCIJA SLAGALICE

       var ttbl=document.createElement("table");
       for(i=0;i<5;i++){
          var ttr=document.createElement("tr"); 
          for(j=0;j<4;j++){
             var ttd=document.createElement("td"); 
             ttd.setAttribute("class","slk");
             if(i==4){
               if(j==0){
                 ttd.setAttribute("class","emp");
               }
               else{
                 ttd.setAttribute("class","fx");                
                 ttd.setAttribute("colspan","3");
                 j=4;
               }
             }
             else{
               ttd.setAttribute("onclick","zamena("+i+","+j+")"); 
             }
             ttr.appendChild(ttd);
          } 
          ttbl.appendChild(ttr);
       } 
       document.body.appendChild(ttbl);  
// SLIKA PORED KONSTRUKCIJE SLAGALICE
       var myimg=document.createElement("img");
       myimg.setAttribute("class","uzor");
       imglink="slike/"+zivotinje[Math.floor(Math.random() * 22)];
       document.body.appendChild(myimg);  
       myimg.style.position="relative";
      
       myimg.style.left="610px";
       myimg.style.top="-480px";
       myimg.style.width="400px";
       myimg.style.height="400px";
       myimg.style.border="30px solid transparent";
       myimg.style.borderImage="url(slike/detelina-okvir.jpg) 32 30 repeat";
       mesanje();
     }
     function mesanje(){
        document.getElementsByClassName("uzor")[0].setAttribute("src",imglink);
      	maska[0]=Math.floor((Math.random() * 16) + 1);
      	for(i=1;i<16;i++){
        	 nastavi=true; 
           while(nastavi){   
 	              maska[i]=Math.floor((Math.random() * 16) + 1);
                nastavi=false;
                for(j=0;j<=i-1;j++){
                  if(maska[j]==maska[i]){ nastavi=true;break; } 
	   		        }
      		 }
        }  
        for(i=0;i<16;i++){        
           document.getElementsByTagName("td")[i].className="slk";
           document.getElementsByTagName("td")[i].style.backgroundImage="url("+imglink+")";
           document.getElementsByTagName("td")[i].style.backgroundSize="400px 400px";
        }
        for(i=0;i<16;i++){ 
           poza=(Math.floor((maska[i]-1)%4)*33)+"% "+(Math.floor((maska[i]-1)/4)*33) +"%"
           console.log(poza)              
           document.getElementsByTagName("td")[i].setAttribute("data-raspored",maska[i]-1)
           document.getElementsByTagName("td")[i].style.backgroundPosition=poza     
        }

        document.getElementsByTagName("td")[16].className="emp";
        document.getElementsByTagName("td")[16].style.backgroundImage="url('')";
        document.getElementsByTagName("td")[16].style.backgroundColor="#222222";
        document.getElementsByTagName("td")[16].style.opacity="0.7";

     }

     function zamena(ii,jj){
       irsp=ii*4+jj;
       if(ii==4 && jj==0){
         if(document.getElementsByTagName("td")[irsp-4].className=="emp"){
           zamena_razmena(ii,jj,0,-4)
           document.getElementsByTagName("td")[irsp-4].setAttribute("onclick","zamena(3,0)");

         }
       }
       if(ii==3 && jj==0){
         if(document.getElementsByTagName("td")[irsp+4].className=="emp"){
           zamena_razmena(ii,jj,0,4)
           document.getElementsByTagName("td")[irsp+4].setAttribute("onclick","zamena(4,0)");
         }
         if(document.getElementsByTagName("td")[irsp+1].className=="emp"){
           zamena_razmena(ii,jj,0,1)
           document.getElementsByTagName("td")[irsp+1].setAttribute("onclick","zamena(3,1)");
         } 
         if(document.getElementsByTagName("td")[irsp-4].className=="emp"){
           zamena_razmena(ii,jj,0,-4)
           document.getElementsByTagName("td")[irsp-4].setAttribute("onclick","zamena(2,0)");
         }
       }
       if(ii<3 && jj==0){
         if(document.getElementsByTagName("td")[irsp+4].className=="emp"){
           zamena_razmena(ii,jj,0,4)
           document.getElementsByTagName("td")[irsp+4].setAttribute("onclick","zamena("+(ii+1)+",0)");
         }
         if(document.getElementsByTagName("td")[irsp+1].className=="emp"){
           zamena_razmena(ii,jj,0,1)
           document.getElementsByTagName("td")[irsp+1].setAttribute("onclick","zamena("+ii+",1)");
         }
         if(((irsp-4)>=0) && document.getElementsByTagName("td")[irsp-4].className=="emp"){
           zamena_razmena(ii,jj,0,-4)
           document.getElementsByTagName("td")[irsp-4].setAttribute("onclick","zamena("+(ii-1)+",0)");
         }

       }
       if(ii==0 && jj>0){
         if(document.getElementsByTagName("td")[irsp-1].className=="emp"){
           zamena_razmena(ii,jj,0,-1)
           document.getElementsByTagName("td")[irsp-1].setAttribute("onclick","zamena(0,"+(jj-1)+")");
         }
         if(document.getElementsByTagName("td")[irsp+4].className=="emp"){
           zamena_razmena(ii,jj,0,4)
           document.getElementsByTagName("td")[irsp+4].setAttribute("onclick","zamena("+(ii+1)+","+jj+")");
         }
         if(document.getElementsByTagName("td")[irsp+1].className=="emp"){
           zamena_razmena(ii,jj,0,1)
           document.getElementsByTagName("td")[irsp+1].setAttribute("onclick","zamena(0,"+(jj+1)+")");
         }
       }

       if(ii>0 && jj==3){
         if(document.getElementsByTagName("td")[irsp-4].className=="emp"){
           zamena_razmena(ii,jj,0,-4)
           document.getElementsByTagName("td")[irsp-4].setAttribute("onclick","zamena("+(ii-1)+",3)");           
         }
         if(document.getElementsByTagName("td")[irsp-1].className=="emp"){
           zamena_razmena(ii,jj,0,-1)
           document.getElementsByTagName("td")[irsp-1].setAttribute("onclick","zamena("+ii+","+(jj-1)+")");           
         }
         if(document.getElementsByTagName("td")[irsp+4].className=="emp"){
           zamena_razmena(ii,jj,0,4)
           document.getElementsByTagName("td")[irsp+4].setAttribute("onclick","zamena("+(ii+1)+",3)");           
         }
       }

       if(ii==3 && jj<3){
         if(document.getElementsByTagName("td")[irsp-4].className=="emp"){
           zamena_razmena(ii,jj,0,-4)
           document.getElementsByTagName("td")[irsp-4].setAttribute("onclick","zamena("+(ii-1)+","+jj+")");
         }
         if(document.getElementsByTagName("td")[irsp+1].className=="emp"){
           zamena_razmena(ii,jj,0,1)
           document.getElementsByTagName("td")[irsp+1].setAttribute("onclick","zamena(3,"+(jj+1)+")");
         }
         if(document.getElementsByTagName("td")[irsp-1].className=="emp"){
           zamena_razmena(ii,jj,0,-1)
           document.getElementsByTagName("td")[irsp-1].setAttribute("onclick","zamena("+ii+","+(jj-1)+")");
         }

       }
       if((ii>0 && ii<3) && (jj>0 && jj<3)) {
         if(document.getElementsByTagName("td")[irsp+1].className=="emp"){
           zamena_razmena(ii,jj,0,1)
           document.getElementsByTagName("td")[irsp+1].setAttribute("onclick","zamena("+ii+","+(jj+1)+")");
         }
         if(document.getElementsByTagName("td")[irsp+4].className=="emp"){
           zamena_razmena(ii,jj,0,4)          
           document.getElementsByTagName("td")[irsp+4].setAttribute("onclick","zamena("+(ii+1)+","+jj+")"); 
         }
         if(document.getElementsByTagName("td")[irsp-1].className=="emp"){
           zamena_razmena(ii,jj,0,-1)
           document.getElementsByTagName("td")[irsp-1].setAttribute("onclick","zamena("+ii+","+(jj-1)+")");
         }
         if(document.getElementsByTagName("td")[irsp-4].className=="emp"){
           zamena_razmena(ii,jj,0,-4)          
           document.getElementsByTagName("td")[irsp-4].setAttribute("onclick","zamena("+(ii-1)+","+jj+")"); 
         }
       }

     }

     function zamena_razmena(ii,jj,iraz,jraz){
           if(iraz==0){
             nzv=document.getElementsByTagName("td")[ii*4+jj].className;
             document.getElementsByTagName("td")[ii*4+jj].className=document.getElementsByTagName("td")[ii*4+jj+jraz].className;
             document.getElementsByTagName("td")[ii*4+jj+jraz].className=nzv;
             dtrsp=document.getElementsByTagName("td")[ii*4+jj].getAttribute("data-raspored"); 
             document.getElementsByTagName("td")[ii*4+jj].removeAttribute("data-raspored");
             document.getElementsByTagName("td")[ii*4+jj+jraz].setAttribute("data-raspored",dtrsp);
             stl=document.getElementsByTagName("td")[ii*4+jj].style;
             document.getElementsByTagName("td")[ii*4+jj].style=document.getElementsByTagName("td")[ii*4+jj+jraz].style;
             document.getElementsByTagName("td")[ii*4+jj+jraz].style=stl;
             document.getElementsByTagName("td")[ii*4+jj+jraz].style.backgroundImage="url("+imglink+")";
             document.getElementsByTagName("td")[ii*4+jj].removeAttribute("onclick"); 
poza=(Math.floor(dtrsp%4)*33)+"% "+(Math.floor(dtrsp/4)*33) +"%"
             document.getElementsByTagName("td")[ii*4+jj+jraz].style.backgroundPosition=poza    
           } 
 
     }
     function pomeri(smer){
          imind=imind+smer;
          if(smer==-1){
            if(imind>=0){
	       for(i=imind;i<imind+16;i++){
	           document.getElementsByClassName("imnav")[i-imind].setAttribute("src","slike/"+zivotinje[i]);
	           document.getElementsByClassName("imnav")[i-imind].setAttribute("onclick","imglink='"+"slike/"+zivotinje[i]+"';mesanje();");
	       }                 
	    }
            else{
		imind=0;
            }          
          }
          if(smer==1){
            if(imind<=6){
	       for(i=imind;i<imind+16;i++){
	           document.getElementsByClassName("imnav")[i-imind].setAttribute("src","slike/"+zivotinje[i]);
	           document.getElementsByClassName("imnav")[i-imind].setAttribute("onclick","imglink='"+"slike/"+zivotinje[i]+"';mesanje();");
	       }                 
                
            }
            else{
		imind=6;
            }          
          } 
     }
