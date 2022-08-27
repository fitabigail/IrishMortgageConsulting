    //Navigation 

    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");

    menu.addEventListener('click', ()=>{

        navbar.classList.toggle('change');
        menu.classList.toggle('change');

    })

    // Section About - Video

    const video = document.querySelector('.video')
    const btn = document.querySelector('.buttons i')
    const bar = document.querySelector('.video_bar')

    const playPause =()=>{
        if(video.paused)    
        {
            video.play()
            btn.className ='far fa-pause-circle'
            video.style.opacity='.9'
        }
        else{
            video.pause()
            btn.className ='far fa-play-circle'
            video.style.opacity='.6'
        }
       
    }

    btn.addEventListener('click', ()=> {
        playPause()
    }) 

    //video bar 

    video.addEventListener('timeupdate', ()=>{
       const barWidth =video.currentTime/video.duration
       bar.style.width =`${barWidth * 100}%`
       if(video.ended){
        btn.className ='far fa-play-circle'
        video.style.opacity ='0.6'
       }




    })

