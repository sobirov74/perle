const hamb = document.querySelector('.header__content-hamburger'),
      headerLeft = document.querySelector('.header__content-left'),
      content = document.querySelector('.header__content');
let menuopen = false;
hamb.addEventListener('click', () => {
  if (!menuopen) {
    hamb.classList.add('open');
    menuopen = true;
  } else {
    hamb.classList.remove('open');
    menuopen = false;
  }

  headerLeft.classList.toggle('active');
  headerLeft.style = `transition: 0.5s`;
}); // hamb.addEventListener('click', () => {
//     headerLeft.classList.toggle('active')
// })

const blur = document.querySelectorAll('.reserveMain__content-child'),
      blurTitle = document.querySelectorAll('.reserveMain__content-title'),
      blurBtn = document.querySelectorAll('.reserveMain__content-moreBtn');

for (let i = 0; i < blur.length; i++) {
  blur[i].addEventListener('mouseover', () => {
    blurTitle[i].style = `
        display: block;
        transition: 0.5s;
        `;
    blurBtn[i].style = `
        display: flex;
        transition: 0.5s;
        `;
    blur[i].style = `
        backdrop-filter: blur(0);
        opacity: 1;
        transition: 0.5s;
        `;
  });
  blur[i].addEventListener('mouseleave', () => {
    blurTitle[i].style = `
        display: none;
        transition: 0.5s;
        `;
    blurBtn[i].style = `
        display: none;
        transition: 0.5s;
        `;
    blur[i].style = `
        backdrop-filter: blur(6px);
        opacity: 0;
        `;
  });
}

class Slider {
  constructor(obj) {
    this.slider = document.querySelector(obj.slider);
    this.sliderImg = this.slider.querySelector(obj.sliderImg);
    this.slides = this.slider.querySelectorAll(obj.slides);
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
    } // this.next.preventDefault();
    // this.prev.preventDefault();
    // setInterval(() => {
    //     this.move(this.next)
    // }, 2000);


    this.next.addEventListener('click', () => this.move(this.next));
    this.prev.addEventListener('click', () => this.move(this.prev));
  }

  move(btn) {
    this.next.disabled = true;
    this.prev.disabled = true;
    setTimeout(() => {
      this.next.disabled = false;
      this.prev.disabled = false;
    }, 1000);
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
      this.activeSlide++;

      if (this.activeSlide >= this.slides.length) {
        this.activeSlide = 0;
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
});

class Slider1 {
  constructor(obj) {
    this.slider1 = document.querySelector(obj.slider1);
    this.sliderImg1 = this.slider1.querySelector(obj.sliderImg1);
    this.slides1 = this.slider1.querySelectorAll(obj.slides1);
    this.next1 = this.slider1.querySelector(obj.next1);
    this.prev1 = this.slider1.querySelector(obj.prev1);
    this.width = this.slider1.clientWidth;
    this.height = this.slider1.clientHeight;
    this.activeSlide = 0;
    this.sliderImg1.style = `
            position: relative;
            height: ${this.height}px;
            overflow: hidden;
        `;

    for (let i = 0; i < this.slides1.length; i++) {
      this.slides1[i].style = `
                position: absolute;
                width: ${this.width}px;
                height: ${this.height}px;
            `;

      if (i != this.activeSlide) {
        this.slides1[i].style.transform = `translateX(${this.width}px)`;
      }

      if (i === this.slides1.length - 1) {
        this.slides1[i].style.transform = `translateX(${-this.width}px)`;
      }
    }

    this.next1.addEventListener('click', () => this.move1(this.next1));
    this.prev1.addEventListener('click', () => this.move1(this.prev1));
  }

  move1(btn) {
    this.next1.disabled = true;
    this.prev1.disabled = true;
    setTimeout(() => {
      this.next1.disabled = false;
      this.prev1.disabled = false;
    }, 1000);
    let btnLeftOrRight = btn == this.next1 ? this.width * -1 : this.width;

    for (let i = 0; i < this.slides1.length; i++) {
      this.slides1[i].style.transition = '0ms';

      if (i != this.activeSlide) {
        this.slides1[i].style.transform = `translateX(${btnLeftOrRight * -1}px)`;
      }
    }

    this.slides1[this.activeSlide].style.transform = `translateX(${btnLeftOrRight}px)`;
    this.slides1[this.activeSlide].style.transition = '1000ms';

    if (btn == this.next1) {
      this.activeSlide++;

      if (this.activeSlide >= this.slides1.length) {
        this.activeSlide = 0;
      }
    } else if (btn == this.prev1) {
      this.activeSlide--;

      if (this.activeSlide < 0) {
        this.activeSlide = this.slides1.length - 1;
      }
    }

    this.slides1[this.activeSlide].style.transform = `translateX(0px)`;
    this.slides1[this.activeSlide].style.transition = '1000ms';
  }

}

const slider1 = new Slider1({
  slider1: '.main__slides',
  sliderImg1: '.main__slides-firstLeft',
  slides1: '.main__slides-imgLeft1',
  next1: '.main__slides-next1',
  prev1: '.main__slides-prev1'
});

class Slider2 {
  constructor(obj) {
    this.slider = document.querySelector(obj.slider);
    this.sliderImg = this.slider.querySelector(obj.sliderImg);
    this.slides = this.slider.querySelectorAll(obj.slides);
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

    this.next.addEventListener('click', () => this.move(this.next));
    this.prev.addEventListener('click', () => this.move(this.prev));
  }

  move(btn) {
    this.next.disabled = true;
    this.prev.disabled = true;
    setTimeout(() => {
      this.next.disabled = false;
      this.prev.disabled = false;
    }, 1000);
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
      this.activeSlide++;

      if (this.activeSlide >= this.slides.length) {
        this.activeSlide = 0;
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
});