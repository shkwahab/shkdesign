$("#mobilebtn").click(function(){
$("#mobile-menu-2").toggleClass("hidden");
});
let date=new Date().getFullYear();
$("#copyright").html(`&copy;CopyRight ${date}. &nbsp;All Rights Reserved`);

const sections=document.querySelectorAll('section');
const li=document.querySelectorAll('li.nav-item');

window.addEventListener('scroll',function(){
    let current="";
    sections.forEach(function(section){
        const sectionTop=section.offsetTop-120;
        // const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(pageYOffset>=sectionTop){
            current=section.getAttribute('id');
        }
    });
    li.forEach(li=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    });
    let home=document.querySelector('li.home');
    if(this.pageYOffset<=96){
        home.classList.add('active');
    }
    
});


    function scrollToHome(){
    window.scrollTo({top:0,behavior:'smooth'});
}
function scrollToServices(){
    window.scrollTo({top:sections[2].offsetTop-90,behavior:'smooth'});
}
function scrollToTestimonial(){
    window.scrollTo({top:sections[3].offsetTop-120,behavior:'smooth'});
}
function scrollToTeam(){
    window.scrollTo({top:sections[4].offsetTop-120,behavior:'smooth'});    
}
function scrollToContact(){
    window.scrollTo({top:sections[5].offsetTop-30,behavior:'smooth'});
}


