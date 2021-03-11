

 let button_toggel = document.querySelector("#btn-toggle");

 let  songs = document.querySelector(".music-song-title");
 let singer = document.querySelector(".music-singer-name");
 
 let container = document.querySelector(".container");
 let image = document.querySelector(".image-left img");
 let fillbar = document.querySelector(".processbar");
 let inputValue = document.querySelector("#myRange");

 
 let button_play = document.querySelector(".btn-toggle i.fa-play");
 let length = document.querySelector("#length");
 
 

let index = 0;


 


let list_Songs = [
    {
        song_name: 'Chúng ta của hiện tại ',
    song_singer:'Sơn Tùng MTP',
    song_image:'https://1.bp.blogspot.com/-wpE8kAroZl8/X-p8dYlTABI/AAAAAAAAJ8k/QWePuk9isy0PuPMxmweqCnajPlhEI8gagCNcBGAsYHQ/s787/132391052_223041176082901_5587329705790319564_n.png',
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
song_singer:' DEAM',
song_image:'https://images.unsplash.com/photo-1614442042855-e17d53875286?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
song_src:'https://file-am-thanh.vercel.app/Rendezvous.mp3'
}
];


let audio = document.createElement("audio");
container.appendChild(audio);

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
  

 function next(){
    if(index >list_Songs.length-1){
        index = 0;
       
    }

index++;

change();
playbtn();


}
function prev(){
    if(index < 0){
        index = list_Songs.length;
    }

    index--;
    change();
   
    playbtn();
   
}
  
audio.addEventListener("timeupdate", function(){
   
    let position = audio.currentTime / audio.duration;
   length.style.width = position * 100 +"%";
 
    if( length.style.width ==="100%"){
        prev();
}
   




});

function loop_Music(){
    audio.loop = true;
   document.querySelector(".nu").innerHTML = 1;
}



function add(){
    audio.currentTime+=25;
}
function subtract(){
    audio.currentTime -=5;
}





