    let menuBtn = document.querySelector('.toggle')
    let navList = document.querySelector('.nav__list')
    let closeMenuBtn = document.querySelector('.nav__close')

    menuBtn.addEventListener('click', ()=> {
        navList.classList.toggle('show__menu')
        menuBtn.classList.toggle('change')
        closeMenuBtn.classList.toggle('show')        
    })

    closeMenuBtn.addEventListener('click', ()=> {
        navList.classList.toggle('show__menu')
        menuBtn.classList.toggle('change')
        closeMenuBtn.classList.remove('show')        
    })

    window.addEventListener('scroll', ()=> {
        if(window.scrollY > 200 && window.innerWidth > 768) {
            scrollBtn.style.display = "flex"
        } else {
            scrollBtn.style.display = "none"
        }        
    })

    let scrollBtn = document.querySelector('.scroll__top')

    scrollBtn.addEventListener('click', ()=> {
        window.scrollTo(0,0)
    })