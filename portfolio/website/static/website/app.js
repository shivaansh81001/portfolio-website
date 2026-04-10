let bool_projects_screen=true;

var links = document.querySelectorAll('.link a');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        links.forEach(function(item) {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});

function project_github(obj){
    console.dir(obj)
    if (obj.id=="stc-mgt"){
        window.open("https://github.com/shivaansh81001/Stock-Management-.git","_blank");
    }
    else if(obj.id=="git-tab"){
        window.open("https://github.com/shivaansh81001/README_table_generator.git","_blank");
    }

    else{
        window.alert("This project is not public yet");
    }
}


function connect(){
    let connect=document.querySelector('.hire-me');
    connect.addEventListener("click",()=>{
        window.open("mailto:shivaanshbhatia007@gmail.com","_blank");
    });
}

function desc_up(){
    let desc=document.querySelector('.desc');
    let desc2=document.querySelector('.desc_2');
    let desc_up=document.querySelector('.desc_up');
    let desc_down=document.querySelector('.desc_down');
    // console.log('true');
    if (desc2.style.visibility=='visible'){
        
        desc2.style.opacity=0;
        desc2.style.transform='translateY(200%)'
        
        element_display(desc,'on');
        element_visibilty(desc,'on');
        setTimeout(()=>{
            desc.style.transform='translateY(0)';
            desc.style.opacity=0.9;
            element_visibilty(desc2,'off');
            element_display(desc2,'off');
            
        },200);
        
    }
    
    desc_up.style.opacity='0';
    element_visibilty(desc_down,'on');
    // element_display(desc_down,'on');

    setTimeout(()=>{
        element_visibilty(desc_up,'off');
        // element_display(desc_up,'off');
        desc_down.style.opacity='0.4';
    },1000);
}

function desc_down(){
    let desc=document.querySelector('.desc');
    let desc2=document.querySelector('.desc_2');
    let desc_down=document.querySelector('.desc_down');
    let desc_up=document.querySelector('.desc_up');

    if (desc.style.visibility=='visible'){
        desc.style.opacity=0;
        desc.style.transform='translateY(-200%)'
        
        element_display(desc2,'on');
        element_visibilty(desc2,'on');
        setTimeout(()=>{
            desc2.style.transform='translateY(0)';
            desc2.style.opacity=0.9;
            element_visibilty(desc,'off');
            element_display(desc,'off');
            
        },200);
        
    }
    
    desc_down.style.opacity='0';
    element_visibilty(desc_up,'on');
    element_display(desc_up,'on');

    setTimeout(()=>{
        element_visibilty(desc_down,'off');
        // element_display(desc_down,'off');
        desc_up.style.opacity='0.4';
    },1000);
    
}

function click_home(){
    let proj=document.querySelector('.projects_screen');
    let main_class=document.querySelector('.main');

    if (bool_projects_screen==true){
        proj.style.transform='translateY(-100%)';
        main_class.style.transform='translateY(-100%)';
        proj.style.opacity=0;
        bool_projects_screen=false;
    }
    let desc_up=document.querySelector('.desc_up');
    let desc_down=document.querySelector('.desc_down');

    desc_down.style.opacity='0';
    desc_up.style.opacity='0';

    element_visibilty(desc_down,'off');
    element_visibilty(desc_up,'off');

    setTimeout(()=>{
        element_display(desc_down,'off');
        element_display(desc_up,'off');
    },1000);

    let desc=document.querySelector('.desc')
    desc.style.opacity='0';
    let desc2=document.querySelector('.desc_2');
    desc2.style.opacity='0';
    setTimeout(()=>{
        
        desc.style.visibility='hidden';
        desc.style.display='none';
        desc2.style.visibility='hidden';
        desc2.style.display='none';
    },1200);

    
    if (main_class.style.visibility=='hidden'){
        main_class.style.display='flex';
        main_class.style.visibility='visible';
        setTimeout(()=>{
            main_class.style.transform='translateY(0%)';
        },200)
        

    }
    

    let socials=document.querySelector('.socials');
    socials.style.visibility="visible";

    let pic=document.querySelector('.picture');
    if (pic.style.opacity=='0'){
        pic.style.opacity='1';
        pic.style.visibility='visible';
    }
    pic.style.zIndex='-1';
    let social_links=document.querySelectorAll('.social-link');
    // console.log(social_links);
    for (let i=social_links.length-1;i>=0;i--){
        // console.log('hi',i+social_links[i].innerHTML);
        setTimeout(()=>{
            social_links[i].style.visibility= 'visible';  
        },(social_links.length-i)*100);
    }
    
    document.querySelector('.socials').style.zIndex='+1';
    document.querySelector('.socials').style.transform='translateX(0)'
    setTimeout(()=>{
        document.querySelector('.greet').style.opacity= '1';
    },900);
    // document.querySelector('.desc').style.display= 'flex';
    // setTimeout(()=>{
    //     document.querySelector('.desc').style.opacity= '0.8';
    // },200);
    
    
    
    
    setTimeout(()=>{
        move_name('0','1');
        move_picture(0);
    },100);
  


}

function move_picture(move){
    let picture=document.querySelector('.picture');
    picture.style.transform=`translateX(${move})`;
}

function move_picture_vertically(move){
    let picture=document.querySelector('.picture');
    picture.style.transform=`translateY(${move})`;
}


function move_name(move,scale){
    let name=document.querySelector('.name');
    name.style.transform=`translateY(${move})`;
    name.style.scale=`${scale}`;
    
}

function element_visibilty(element,mode){
    if (mode=='on'){
        element.style.visibility='visible';
    }
    else if(mode=='off'){
        element.style.visibility='hidden';
    }
    
}

function element_display(element,mode){
    if (mode=='on'){
        element.style.display='flex';
    }
    else if(mode=='off'){
        element.style.display='none';
    }
    
}

function about_click(){
    let desc2=document.querySelector('.desc_2');
    let desc_up=document.querySelector('.desc_up');
    let desc_down=document.querySelector('.desc_down');
    let proj=document.querySelector('.projects_screen');
    // console.log(desc_down,desc_up);
    element_display(desc_up,'on');
    element_display(desc_down,'on');

    
    element_visibilty(desc_up,'off');

    let main_class=document.querySelector('.main');
    if (main_class.style.visibility=='hidden'){
        main_class.style.visibility='visible';
        main_class.style.transform='translateY(0%)';

    }
    let pic=document.querySelector('.picture');
    if (pic.style.opacity === '0' || pic.style.visibility === 'hidden') {
        // console.log('true');
        pic.style.visibility = 'visible';
        setTimeout(() => {
            pic.style.opacity = '1';
        }, 10);
    }
    if (bool_projects_screen==true){
        proj.style.transform='translateY(-100%)';
        main_class.style.transform='translateY(-100%)';
        proj.style.opacity=0;
        bool_projects_screen=false;
    }

    let desc=document.querySelector('.desc')
    desc.style.display='flex';
    desc.style.visibility='visible';
    desc.style.transform='translateY(0)';

    if (document.querySelector('.desc').style.visibility=='visible'){
        element_visibilty(desc_down,'on');
        desc2.style.transform='translateY(200%)';
        desc2.style.opacity=0;
        setTimeout(()=>{
            element_visibilty(desc2,'off');
            element_display(desc2,'off');
        },1000);
        
    }

    

    setTimeout(()=>{
        desc.style.opacity=0.9;
    },500);


    setTimeout(()=>{
        desc_down.style.opacity='0.4';
    },600);


    document.querySelector('.socials').style.zIndex='-1';
    document.querySelector('.picture').style.zIndex='+1';

    let socials=document.querySelectorAll('.social-link');
    
    for (let i=0;i<socials.length;i++){
        setTimeout(()=>{
            socials[i].style.visibility= 'hidden';  
        },i*100);
    }

    
    document.querySelector('.socials').style.transform='translateX(-40%)'
    
    

    move_name('-300%','0.55');
    let greet=document.querySelector('.greet');
        greet.style.opacity='0';
    
    
    move_picture('50%');
    
    

    // setTimeout(()=>{
    //     document.querySelector('.desc').style.display='none';
        
        
    // },1300);
    

    // let desc=document.querySelector('.desc');
    // desc.style.opacity='0';
}

function click_projects(){
    let main_class=document.querySelector('.main');
    let proj=document.querySelector('.projects_screen');
    main_class.style.transform='translateY(100%)';
    
    bool_projects_screen=true;
    proj.style.transform='translateY(0)';
    proj.style.opacity='1';
    

}


function click_gallery(){
    window.alert("This Page is under construction");
}