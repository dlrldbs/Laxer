const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const headTxt = new SplitType('.container .sc-visual .slogan .slogan-title', { types: 'words, chars', });

const introTl = gsap.timeline()
gsap.set('.sc-visual .col-wrap',{xPercent:100})
gsap.set('.sc-visual .slogan-title .word',{opacity:0,yPercent:30})
gsap.set('.sc-visual .slogan-text',{opacity:0,yPercent:30})
gsap.set('.header',{opacity:0})

introTl
.to('.introbg',{
  height:'0%',
  duration:1,
  delay:0.5
},'a')
.to('.col-wrap',{
  xPercent:0,
  duration:1,
  delay:0.5
},'b')
.to('.slogan-title .word',{
    opacity:1,
    yPercent:0,
    duration:1,
    delay:0.5
  },'c')
.to('.slogan-text',{
  opacity:1,
  yPercent:0,
  duration:1,
  delay:0.3
},'d')
.to('.header',{
    opacity:1,
    duration:1,
    delay:0.5
},'e')


//마우스 커서 이벤트
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  gsap.to('.cursor',{
    x:e.clientX,
    y:e.clientY,
  }) 

  gsap.to('.sc-visual .right-col .img-area img',{
    x:(e.clientX-window.innerWidth/2)/80,
  }) 

});

//헤더 이벤트
const header = document.querySelector('.header');
const linkArea = document.querySelector('.link-area');
const hamburgerMenu = document.querySelector('.hamburger-menu')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 0) {
        header.classList.add('hidden');
        linkArea.style.display = 'none';
        hamburgerMenu.style.visibility = 'visible';
    } else {
        header.classList.remove('hidden');
        linkArea.style.display = 'flex';
        hamburgerMenu.style.visibility  = 'hidden';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const scVisual = document.querySelector('.sc-visual');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const visualSectionTop = scVisual.offsetTop;
        const visualSectionHeight = scVisual.offsetHeight;

        if (scrollPosition >= visualSectionTop && scrollPosition <= visualSectionTop + visualSectionHeight) {
            header.style.visibility = 'hidden';
        } else {
            header.style.visibility = 'visible';
        }
    });

    header.style.visibility = 'hidden';
});



//메뉴
const menuOverlay = document.querySelector('.menu-overlay');
const closeButton = document.querySelector('.close-button');
const closeArea = document.querySelector('.close-area');
const menuButton = document.querySelector('.hamburger-menu');

menuButton.addEventListener('click', () => {
    menuOverlay.classList.add('open');
});

closeButton.addEventListener('click', () => {
    menuOverlay.classList.remove('open');
});

//part1,3,4,7 title 이벤트


//part2,6,8 title 이벤트
gsap.set('.sc-part2 [data-child="1"]',{y:80})
gsap.set('.sc-part2 [data-child="2"]',{y:160})
gsap.set('.sc-part2 [data-child="3"]',{y:240})
// gsap.set('.container .sc-part2 .group-content .content-area',{y:100})

gsap.to('.sc-part2 [data-child]',{
    scrollTrigger: {
        trigger: `.sc-part2`,
        start: '0% 100%',
        end: '0% 0%',
        scrub:1,
    },
    y:0
})

gsap.set('.sc-part5 [data-child="1"]',{y:100})
gsap.to('.sc-part5 [data-child]',{
    scrollTrigger: {
        trigger: `.sc-part5`,
        start: '0% 100%',
        end: '0% 0%',
        scrub:1,
    },
    y:0
})

gsap.set('.sc-part6 [data-child="1"]',{y:80})
gsap.set('.sc-part6 [data-child="2"]',{y:160})
gsap.to('.sc-part6 [data-child]',{
    scrollTrigger: {
        trigger: `.sc-part6`,
        start: '0% 100%',
        end: '0% 0%',
        scrub:1,
    },
    y:0
})

gsap.set('.sc-part8 [data-child="1"]',{y:80})
gsap.set('.sc-part8 [data-child="2"]',{y:160})
gsap.to('.sc-part8 [data-child]',{
    scrollTrigger: {
        trigger: `.sc-part8`,
        start: '0% 100%',
        end: '0% 0%',
        scrub:1,
    },
    y:0
})
// const sections = [
//     { trigger: '.sc-part2', yOffset: 80 },
//     { trigger: '.sc-part5', yOffset: 80 },
//     { trigger: '.sc-part6', yOffset: 80 },
//     { trigger: '.sc-part8', yOffset: 80 }
//   ];
  
//   sections.forEach(section => {
//     gsap.set(`${section.trigger} [data-child="1"]`, { y: section.yOffset });
//     gsap.set(`${section.trigger} [data-child="2"]`, { y: section.yOffset * 2 });
//     gsap.set(`${section.trigger} [data-child="3"]`, { y: section.yOffset * 3 });
  
//     gsap.to(`${section.trigger} [data-child]`, {
//       scrollTrigger: {
//         trigger: section.trigger,
//         start: '0% 100%',
//         end: '0% 0%',
//         scrub: 1,
//       },
//       y: 0
//     });
//   });
  

//visual
gsap.to('.sc-visual .bg',{
    scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 0%", 
        end:"100% 50%",
        scrub:0,
    },
    opacity:1,
})
gsap.to('.sc-visual .content',{
    scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 0%", 
        end:"100% 0%",
        scrub:0,
    },
    yPercent:20,
    ease:'none',
})

//part1 sticky
gsap.to('.sc-part1 .group-content .col-right .messagebox',{
    scrollTrigger:{
        trigger:".group-content",
        start:"0% 0%", 
        end:"100% 100%", 
        scrub:1,
    },
    Ypercent:450,
})

//part2 sticky
part2CardTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-part2 .sticky-wrapper",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
    ease: "none",
})
for (i = 2; i <= 7; i++) {
    part2CardTl.to(`.sc-part2 .content-item:nth-child(${i})`, {
        xPercent: -100,
        x:200
    },'a')
}
for (i = 3; i <= 7; i++) {
    part2CardTl.to(`.sc-part2 .content-item:nth-child(${i})`, {
        xPercent: -200,
        x:400
    },'b')
}
for (i = 4; i <= 7; i++) {
    part2CardTl.to(`.sc-part2 .content-item:nth-child(${i})`, {
        xPercent: -300,
        x:600
    },'c')
}
for (i = 5; i <= 7; i++) {
    part2CardTl.to(`.sc-part2 .content-item:nth-child(${i})`, {
        xPercent: -400,
        x:800
    },'d')
}
for (i = 6; i <= 7; i++) {
    part2CardTl.to(`.sc-part2 .content-item:nth-child(${i})`, {
        xPercent: -500,
        x:1000
    },'e')
}
for (i = 7; i <= 7; i++) {
    part2CardTl.to(`.sc-part2 .content-item:nth-child(${i})`, {
        xPercent: -600,
        x:1200
    },'f')
}

//part3 scroll
gsap.set('[data-scroll-opacityY]',{opacity:0,y:30,})
ScrollTrigger.batch("[data-scroll-opacityY]", {
    start: "0 90%",
    end: "100% 0%",
    onEnter: batch => {
        gsap.to(batch,{
            opacity:1,
            y:0
        })
    },
});

gsap.set('[data-scroll-opacityX]',{opacity:0,x:-30,})
ScrollTrigger.batch("[data-scroll-opacityX]", {
    start: "0 90%",
    end: "100% 0%",
    onEnter: batch => {
        gsap.to(batch,{
            opacity:1,
            x:0
        })
    },
});

gsap.set('[data-scroll-bg-opacityX]',{opacity:0,xPercent:-100,})
ScrollTrigger.batch("[data-scroll-bg-opacityX]", {
    start: "0 90%",
    end: "100% 0%",
    onEnter: batch => {
        gsap.to(batch,{
            opacity:1,
            xPercent:0
        })
    },
});


gsap.set('[data-scroll-translateY]',{yPercent:100})
ScrollTrigger.batch("[data-scroll-translateY]", {
    start: "0 90%",
    end: "100% 0%",
    onEnter: batch => {
        gsap.to(batch,{
            yPercent:0
        })
    },
});

//bgvideo
gsap.set('.container .bgvideo video',{yPercent:-40})
videoTl = gsap.timeline({
  scrollTrigger:{
      trigger:".bgvideo",
      start:"0% 100%", 
      end:"100% 0%", 
      scrub:0,
  },
  ease:'none'
})
videoTl.to('.container .bgvideo video',{yPercent:0})
videoTl.to('.container .bgvideo video',{yPercent:40})

//part4 sticky
part4CardTl = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-part4 .sticky-wrapper2",
        start:"0% 0%", 
        end:"100% 100%",
        scrub:1,
    },
    ease:'none'
})
for (i = 2; i <= 4; i++) {
    part4CardTl.to(`.sc-part4 .content-item2:nth-child(${i})`, {
        xPercent: -100,
        x:200
    },'a')
}
for (i = 3; i <= 4; i++) {
    part4CardTl.to(`.sc-part4 .content-item2:nth-child(${i})`, {
        xPercent: -200,
        x:400
    },'b')
}
for (i = 4; i <= 4; i++) {
    part4CardTl.to(`.sc-part4 .content-item2:nth-child(${i})`, {
        xPercent: -300,
        x:600
    },'c')
}
// part4CardTl.to('.sc-part4 .content-item2:nth-child(2)',{ xPercent:-100,x:200 },'a')
// part4CardTl.to('.sc-part4 .content-item2:nth-child(3)',{ xPercent:-100,x:200 },'a')
// part4CardTl.to('.sc-part4 .content-item2:nth-child(4)',{ xPercent:-100,x:200 },'a')

// part4CardTl.to('.sc-part4 .content-item2:nth-child(3)',{ xPercent:-200,x:400 },'b')
// part4CardTl.to('.sc-part4 .content-item2:nth-child(4)',{ xPercent:-200,x:400 },'b')

// part4CardTl.to('.sc-part4 .content-item2:nth-child(4)',{ xPercent:-300,x:600 },'c')



//파트너사 로고 이벤트
const partnerItems = document.querySelectorAll('.partner-item');
const logos = document.querySelectorAll('.partner-logo')
partnerItems.forEach((partnerItem, index) => {
    partnerItem.addEventListener('mouseover', () => {
        gsap.to(logos[index], {
            // x: -170,
            opacity: 1,
            display: 'block',
        });
    })
    partnerItem.addEventListener('mouseout', () => {
        gsap.to(logos[index], {
            // x:0,
            opacity: 0,
            display: 'none',
        });
    });
});

//박스 클릭이벤트
$(".contact-btnbox a").click(function(e) {
    e.preventDefault();
    var tabName = $(this).data("tab");

    if (tabName === '#career-box') {
        $(".contact-btnbox").addClass("on");
        $(this).addClass('on').siblings().removeClass('on')
        $(tabName).show().siblings().hide();
    } else {
        $(".contact-btnbox").removeClass("on");
        $(this).addClass('on').siblings().removeClass('on')
        $(tabName).show().siblings().hide();
    }
});
  
gsap.from('.sc-part8 .group-newsletter .bgimg',{
    scrollTrigger:{
        trigger:".group-newsletter",
        start:"0% 90%",
        end:"100% 0%",
    },
    scale:1.2,
})

gsap.to('.sc-part8 .group-newsletter .bgimg',{
    scrollTrigger:{
        trigger:".group-newsletter",
        start:"0% 90%",
        end:"100% 0%",
        scrub:0,
    },
    yPercent:10
})