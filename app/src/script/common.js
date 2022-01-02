const hamb = document.querySelector('.header__content-hamburger'),
    lines = hamb.querySelector('.header__content-lines')
headerLeft = document.querySelector('.header__content-left'),
    content = document.querySelector('.header__content')



content.addEventListener('click', e => {
    if (e.target == content) {
        headerLeft.classList.remove('active');
        headerLeft.style = `transition: 0.5s`
    } else if (e.target == hamb || e.target == lines) {
        headerLeft.classList.add('active');
        headerLeft.style = `transition: 0.5s`
    }
})


// let menuopen = false;

// hamb.addEventListener('click', () => {
//             if (!menuopen) {
//                 hamb.classList.add('open')
//                 menuopen = true;
//             } else {
//                 hamb.classList.remove('open');
//                 menuopen = false;
//             }


//     headerLeft.classList.toggle('active');
//     headerLeft.style =`transition: 0.5s`
// });



// hamb.addEventListener('click', () => {
//     headerLeft.classList.toggle('active')
// })


const child = document.querySelectorAll('.reserveMain__content-child'),
    blurTitle = document.querySelectorAll('.reserveMain__content-title'),
    blurBtn = document.querySelectorAll('.reserveMain__content-moreBtn'),
    blur = document.querySelectorAll('.reserveMain__content-blur')

for (let i = 0; i < child.length; i++) {
    child[i].addEventListener('mouseover', () => {
        blur[i].style = `
        opacity: 0;
        transition: 0.5s;
        
        `
        child[i].style = `
        opacity: 1;
        transition: 0.5s;
        `
    })

    child[i].addEventListener('mouseleave', () => {
        blur[i].style = `
        opacity: 1;
        transition: 0.5s;        
        `

        child[i].style = `
        opacity: 0;
        transition: .5s
        `
    })
    }



    class Slider {
        constructor(obj) {
            this.slider = document.querySelector(obj.slider);
            this.sliderImg = this.slider.querySelector(obj.sliderImg);
            this.slides = this.slider.querySelectorAll(obj.slides)
            this.next = this.slider.querySelector(obj.next);
            this.prev = this.slider.querySelector(obj.prev);



            this.width = this.slider.clientWidth;
            this.height = this.slider.clientHeight;

            this.activeSlide = 0;

            this.sliderImg.style = `
            position: relative;
            height: ${this.height}px;
            overflow: hidden;
        `;

            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style = `
                position: absolute;
                width: ${this.width}px;
                height: ${this.height}px;
            `;

                if (i != this.activeSlide) {
                    this.slides[i].style.transform = `translateX(${this.width}px)`;
                }

                if (i === this.slides.length - 1) {
                    this.slides[i].style.transform = `translateX(${-this.width}px)`;
                }
            }

            // this.next.preventDefault();
            // this.prev.preventDefault();

            // setInterval(() => {
            //     this.move(this.next)
            // }, 2000);

            this.next.addEventListener('click', e => { 
                e.preventDefault();
                this.move(this.next)

            });
            this.prev.addEventListener('click', e => {
                e.preventDefault();                
                this.move(this.prev)
            });
        }



        move(btn) {

            this.next.disabled = true;
            this.prev.disabled = true;

            setTimeout(() => {
                this.next.disabled = false;
                this.prev.disabled = false;
            }, 1000)


            let btnLeftOrRight = btn == this.next ? this.width * -1 : this.width;

            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.transition = '0ms';
                if (i != this.activeSlide) {
                    this.slides[i].style.transform = `translateX(${btnLeftOrRight * -1}px)`;
                }
            }

            this.slides[this.activeSlide].style.transform = `translateX(${btnLeftOrRight}px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';

            if (btn == this.next) {
                this.activeSlide++
                if (this.activeSlide >= this.slides.length) {
                    this.activeSlide = 0
                }
            } else if (btn == this.prev) {
                this.activeSlide--;

                if (this.activeSlide < 0) {
                    this.activeSlide = this.slides.length - 1;
                }
            }

            this.slides[this.activeSlide].style.transform = `translateX(0px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';

        }
    }



    const slider = new Slider({
        slider: '.main__slides',
        sliderImg: '.main__slides-firstLeft',
        slides: '.main__slides-imgLeft',
        next: '.main__slides-next',
        prev: '.main__slides-prev'
    })


    class Slider1 {
        constructor(obj) {
            this.slider = document.querySelector(obj.slider);
            this.sliderImg = this.slider.querySelector(obj.sliderImg);
            this.slides = this.slider.querySelectorAll(obj.slides)
            this.next = this.slider.querySelector(obj.next);
            this.prev = this.slider.querySelector(obj.prev);



            this.width = this.slider.clientWidth;
            this.height = this.slider.clientHeight;

            this.activeSlide = 0;

            this.sliderImg.style = `
            position: relative;
            height: ${this.height}px;
            overflow: hidden;
        `;

            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style = `
                position: absolute;
                width: ${this.width}px;
                height: ${this.height}px;
            `;

                if (i != this.activeSlide) {
                    this.slides[i].style.transform = `translateX(${this.width}px)`;
                }

                if (i === this.slides.length - 1) {
                    this.slides[i].style.transform = `translateX(${-this.width}px)`;
                }
            }

            this.next.addEventListener('click', e => { 
                e.preventDefault();
                this.move(this.next)

            });
            this.prev.addEventListener('click', e => {
                e.preventDefault();                
                this.move(this.prev)
            });
        }



        move(btn) {

            this.next.disabled = true;
            this.prev.disabled = true;

            setTimeout(() => {
                this.next.disabled = false;
                this.prev.disabled = false;
            }, 1000)


            let btnLeftOrRight = btn == this.next ? this.width * -1 : this.width;

            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.transition = '0ms';
                if (i != this.activeSlide) {
                    this.slides[i].style.transform = `translateX(${btnLeftOrRight * -1}px)`;
                }
            }

            this.slides[this.activeSlide].style.transform = `translateX(${btnLeftOrRight}px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';

            if (btn == this.next) {
                this.activeSlide++
                if (this.activeSlide >= this.slides.length) {
                    this.activeSlide = 0
                }
            } else if (btn == this.prev) {
                this.activeSlide--;

                if (this.activeSlide < 0) {
                    this.activeSlide = this.slides.length - 1;
                }
            }

            this.slides[this.activeSlide].style.transform = `translateX(0px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';

        }
    }



    const slider1 = new Slider1({
        slider: '.main__slides',
        sliderImg: '.main__slides-firstLeft',
        slides: '.main__slides-imgLeft1',
        next: '.main__slides-next1',
        prev: '.main__slides-prev1'
    })





    class Slider2 {
        constructor(obj) {
            this.slider = document.querySelector(obj.slider);
            this.sliderImg = this.slider.querySelector(obj.sliderImg);
            this.slides = this.slider.querySelectorAll(obj.slides)
            this.next = this.slider.querySelector(obj.next);
            this.prev = this.slider.querySelector(obj.prev);



            this.width = this.slider.clientWidth;
            this.height = this.slider.clientHeight;

            this.activeSlide = 0;

            this.sliderImg.style = `
            position: relative;
            // height: ${this.height}px;
            overflow: hidden;
        `;

            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style = `
                position: absolute;
                width: ${this.width}px;
                // height: ${this.height}px;
            `;

                if (i != this.activeSlide) {
                    this.slides[i].style.transform = `translateX(${this.width}px)`;
                }

                if (i === this.slides.length - 1) {
                    this.slides[i].style.transform = `translateX(${-this.width}px)`;
                }
            }


            this.next.addEventListener('click', e => { 
                e.preventDefault();
                this.move(this.next)

            });
            this.prev.addEventListener('click', e => {
                e.preventDefault();                
                this.move(this.prev)
            });
        }



        move(btn) {

            this.next.disabled = true;
            this.prev.disabled = true;

            setTimeout(() => {
                this.next.disabled = false;
                this.prev.disabled = false;
            }, 1000)


            let btnLeftOrRight = btn == this.next ? this.width * -1 : this.width;

            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.transition = '0ms';
                if (i != this.activeSlide) {
                    this.slides[i].style.transform = `translateX(${btnLeftOrRight * -1}px)`;
                }
            }

            this.slides[this.activeSlide].style.transform = `translateX(${btnLeftOrRight}px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';

            if (btn == this.next) {
                this.activeSlide++
                if (this.activeSlide >= this.slides.length) {
                    this.activeSlide = 0
                }
            } else if (btn == this.prev) {
                this.activeSlide--;

                if (this.activeSlide < 0) {
                    this.activeSlide = this.slides.length - 1;
                }
            }

            this.slides[this.activeSlide].style.transform = `translateX(0px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';

        }
    }



    const slider2 = new Slider2({
        slider: '.main__slides',
        sliderImg: '.main__slides-firstLeft',
        slides: '.main__slides-imgLeft2',
        next: '.main__slides-next2',
        prev: '.main__slides-prev2'
    })