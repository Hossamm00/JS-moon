
   let stars =document.getElementById("stars1")
   let moon =document.getElementById("moon")
   let mountains3 =document.getElementById("mountains3")
   let mountains4 =document.getElementById("mountains4")
   let river =document.getElementById("river")
   let boat =document.getElementById("boat")
   let mountains7 =document.getElementById("mountains7")
   let night =document.querySelector(".night")


   window.onscroll= function () {
     let value = scrollY ;
     stars.style.left=value + "px"
     moon.style.top=value *4 +  "px"
     mountains3.style.top=value *2 +  "px"
     mountains4.style.top=value *1.5 +  "px"
     river.style.top=value  +  "px"
     boat.style.top=value  +  "px"
     boat.style.left =value  +  "px"
     night.style.fontSize= value +"px"
     if (scrollY >= 67) {
        night.style.fontSize= 67 +"px";
        night.style.position= "fixed";
        if (scrollY >= 471) {
            night.style.display= "none";

        }else
        night.style.display= "block";
        }
        if (scrollY >=127) {
          let main =document.querySelector('.main').style.background= "linear-gradient(#376281,#10001f)"
          
        }else{
            let main =document.querySelector('.main').style.background= "linear-gradient(#200016,#10001f)"

        }

   } 
