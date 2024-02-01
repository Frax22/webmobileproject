    let menuBtn = document.querySelector('.toggle')
    let navList = document.querySelector('.nav__list')

    menuBtn.addEventListener('click', ()=> {
        navList.classList.toggle('active')
        menuBtn.classList.toggle('change')
        
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