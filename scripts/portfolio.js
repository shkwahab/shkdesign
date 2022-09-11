$("#mobilebtn").click(function(){
    $("#mobile-menu-2").toggleClass("hidden");
    });
    let date=new Date().getFullYear();
    $("#copyright").html(`&copy;CopyRight ${date}. &nbsp;All Rights Reserved`);

   
    fetch("./assets/data/flyer.json")
.then(function(response){
   return response.json();
})
.then(function(flyers){
   let placeholder = document.querySelector("#flyerdata");

   let out = "";
   for(let flyer of flyers){
      out += `
      
      <div id="" class="mar-20">
      <img src="${flyer.img}" alt="" class="cardim">
 
    </div>
     
     `
     
   }
   
 
   placeholder.innerHTML = out;
  
});
    fetch("./assets/data/businesscard.json")
.then(function(response){
   return response.json();
})
.then(function(businesscards){
   let placeholder = document.querySelector("#businesscarddata");

   let out = "";
   for(let businesscard of businesscards){
      out += `
      
      <div id="" class="mar-20">
      <img src="${businesscard.img}" alt="" class="cardim">
  
    </div>
     
     `
     
   }
   
 
   placeholder.innerHTML = out;
  
});
    fetch("./assets/data/banner.json")
.then(function(response){
   return response.json();
})
.then(function(banners){
   let placeholder = document.querySelector("#bannerdata");

   let out = "";
   for(let banner of banners){
      out += `
      
      <div id="" class="mar-20">
      <img src="${banner.img}" alt="" class="cardim">
  
    </div>
     
     `
     
   }
   
 
   placeholder.innerHTML = out;
  
});
    fetch("./assets/data/social.json")
.then(function(response){
   return response.json();
})
.then(function(socials){
   let placeholder = document.querySelector("#socialdata");

   let out = "";
   for(let social of socials){
      out += `
      
      <div id="" class="mar-20">
      <img src="${social.img}" alt="" class="cardim">
  
    </div>
     
     `
     
   }
   
 
   placeholder.innerHTML = out;
  
});
    fetch("./assets/data/logo.json")
.then(function(response){
   return response.json();
})
.then(function(logos){
   let placeholder = document.querySelector("#logodata");

   let out = "";
   for(let logo of logos){
      out += `
      
      <div id="" class="mar-20">
      <img src="${logo.img}" alt="" class="cardim">
  
    </div>
     
     `
     
   }
   
 
   placeholder.innerHTML = out;
  
});
    fetch("./assets/data/uxui.json")
.then(function(response){
   return response.json();
})
.then(function(uxuis){
   let placeholder = document.querySelector("#uxuidata");

   let out = "";
   for(let uxui of uxuis){
      out += `
      
      <div id="" class="mar-20">
      <img src="${uxui.img}" alt="" class="cardim">
  
    </div>
     
     `
     
   }
   
 
   placeholder.innerHTML = out;
  
});

    fetch("./assets/data/pack.json")
.then(function(response){
   return response.json();
})
.then(function(packs){
   let placeholder = document.querySelector("#packdata");

   let out = "";
   for(let pack of packs){
      out += `
      
      <div id="" class="mar-20">
      <img src="${pack.img}" alt="" class="cardim">
  
    </div>
     
     `
     
   }
   
 
   placeholder.innerHTML = out;
  
});































const sections=document.querySelectorAll('section');
const li=document.querySelectorAll('li.nav-item');






function scrollToflyers(){
  window.scrollTo({top:0,behavior:'smooth'});
}
function scrollTobusinesscard(){
  window.scrollTo({top:sections[2].offsetTop-120,behavior:'smooth'});
}
function scrollTobanner(){
  window.scrollTo({top:sections[3].offsetTop-120,behavior:'smooth'});    
}
function scrollTosocialmediaposter(){
  window.scrollTo({top:sections[4].offsetTop-120,behavior:'smooth'});
}
function scrollTologodesign(){
  window.scrollTo({top:sections[5].offsetTop-120,behavior:'smooth'});
}
function scrollTouxui(){
  window.scrollTo({top:sections[6].offsetTop-120,behavior:'smooth'});
}
function scrollTopack(){
  window.scrollTo({top:sections[7].offsetTop-120,behavior:'smooth'});
}
function scrollToIcons(){
  window.scrollTo({top:sections[8].offsetTop-120,behavior:'smooth'});
}
