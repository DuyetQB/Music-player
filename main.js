

 let button_toggel = document.querySelector("#btn-toggle");

 let  songs = document.querySelector(".music-song-title");
 let singer = document.querySelector(".music-singer-name");
 let track = document.querySelector(".music-track input");
 let container = document.querySelector(".container");
 let image = document.querySelector(".image-left img");
 let fillbar = document.querySelector(".processbar");

 let button_play = document.querySelector(".btn-toggle i.fa-play");
 
 

let index = 0;


 


let list_Songs = [
    {
        song_name: 'Chúng ta của hiện tại ',
    song_singer:'Sơn Tùng MTP',
    song_image:'https://images.unsplash.com/photo-1614443822810-494e4014f6fc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    song_src:'https://file-am-thanh.vercel.app/Chung%20Ta%20Cua%20Hien%20Tai%20-%20Son%20Tung%20M-TP.mp3'
},
{
    song_name: 'Let me down slowly',
song_singer:'Alec Benjamin',
song_image:'https://images.unsplash.com/photo-1614483573015-fc4ceb584797?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
song_src:'https://file-am-thanh.vercel.app/Let%20Me%20Down%20Slowly%20Cover.mp3'
},
{
    song_name: 'Give me your love',
song_singer:'DEAM',
song_image:'https://images.unsplash.com/photo-1614453966169-fd72db98e20f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
song_src:'https://file-am-thanh.vercel.app/Give%20Me%20Your%20Love.mp3'
},
{
    song_name: 'Without you',
song_singer:'DEAM',
song_image:'https://images.unsplash.com/photo-1614486109039-a8f3dc411201?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
song_src:'https://file-am-thanh.vercel.app/Without%20You2.mp3'
},
{
    song_name: 'Perfect',
song_singer:'Ed Sheeran',
song_image:'https://images.unsplash.com/photo-1614450231802-d7d0076effb8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
song_src:'https://file-am-thanh.vercel.app/Perfect%20(Ed%20Sheeran%20Cover).mp3'
},
{
    song_name: 'Rendervous',
song_singer:' MTP',
song_image:'https://images.unsplash.com/photo-1614442042855-e17d53875286?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
song_src:'https://file-am-thanh.vercel.app/Rendezvous.mp3'
}
];


let audio = document.createElement("audio");
container.appendChild(audio);
audio = new Audio();
audio.src= list_Songs[index];

function change(){

image.src= `${list_Songs[index].song_image}`
audio.src = `${list_Songs[index].song_src}`;
singer.innerHTML = `${list_Songs[index].song_singer}`;
songs.innerHTML = `${list_Songs[index].song_name}`;
}
change();

playbtn = ()=>{
   
   

    if(audio.paused){
        audio.play();
      
       button_toggel.innerHTML= "<i class='fa fa-pause'></i>";
    }
    else{
        audio.pause();
        button_toggel.innerHTML= "<i class='fa fa-play'></i>";

    }

};
  

 next= ()=>{
   

index++;
if(index >list_Songs.length){
    index = 0;
}

change();
playbtn();


}
 prev = ()=>{
 

    index--;
    
    if(index < 0){
        index = list_Songs.length;
    }
    change();
    playbtn();
    
}
  

function track_Value(){

    audio.currentTime = track.value ;
   
    track.value =audio.currentTime 

  
    
}

// audio.addEventListener("timeupdate", function(){
   
//     let position = audio.currentTime / audio.duration;
//     fillbar.style.width = position * 100 +"%";
     
//     if( fillbar.style.width =="100%"){
    
//  }
   






function loop_Music(){
    audio.loop = true;
}

// audio.addEventListener("timeupdate",()=>{
//     console.log(audio.currentTime);
   
  
 
     
// })








