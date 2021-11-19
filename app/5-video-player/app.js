let playbtn = document.getElementById('play'),
    pausebtn = document.getElementById('pause'),
    forwardbtn = document.getElementById('f10'),
    backwardbtn = document.getElementById('b10'),
    volumebtn = document.getElementById('volume'),
    volumeInputEle = document.getElementById('volume-slider'),
    mutebtn = document.getElementById('mute'),
    unmutebtn = document.getElementById('unmute'),
    videoQualitybtn = document.getElementById('video-quality'),
    fullScreenbtn = document.getElementById('full-screen'),
    downloadbtn = document.getElementById('download'),
    video = document.getElementById('main-video');



function play(){
        console.log('play');
        
        video.play();
    }

function pause(){
        console.log('pause');

        video.pause();
    }

function f10(){
        console.log('f10');

        let cTime = video.currentTime;
        cTime = cTime + 10;
        video.currentTime = cTime;
    }

function b10(){
        console.log('b10');
        let cTime = video.currentTime;
        cTime = cTime - 10;
        video.currentTime = cTime;
    }
    
function volume(){
         
        let volumeInput = volumeInputEle.value;
        console.log(volumeInput);

        volumeInput = volumeInput/100;
         
        video.volume = volumeInput;
    }

    
function mute(){
        console.log('mute');
        video.muted = true;  
     }

    function unmute(){
        console.log('unmute');
        video.muted = false; 
    }

    function videoQuality(){
        let targetpath = this.value,
            cTime = video.currentTime;

        video.setAttribute('src' ,targetpath);
        video.currentTime = cTime;
        video.play();
    }


function fullScreen(){

    video.requestFullscreen();
    }


function download(){
        
        let filepath = video.getAttribute('src');
        console.log(filepath);
    }

   

    playbtn.addEventListener('click', play);
    pausebtn.addEventListener('click', pause);
    forwardbtn.addEventListener('click', f10);
    backwardbtn.addEventListener('click', b10);
    volumebtn.addEventListener('click',volume);
    mutebtn.addEventListener('click', mute);
    unmutebtn.addEventListener('click', unmute);
    videoQualitybtn.addEventListener('change', videoQuality);
    fullScreenbtn.addEventListener('click', fullScreen);
    downloadbtn.addEventListener('click', download);