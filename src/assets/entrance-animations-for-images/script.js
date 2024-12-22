import imageLoaded from 'imagesloaded';
import gsap from 'gsap';

class Stage {
  selectors = {
    cards: '.card',
    images: '.card__image',
    cardsGroup: '.cards',
  };
  breakpoint = '53em';
  constructor() {
    this.cardsGroup = document.querySelector(this.selectors.cardsGroup);
    this.cards = this.cardsGroup.querySelectorAll(this.selectors.cards);
    this.images = this.cardsGroup.querySelectorAll(this.selectors.images);
    this.cards = gsap.utils.toArray(this.cards);
    this.cardsCount = this.cards.length;

    /* Degrees between each card */
    this.sliceAngle = (2 * Math.PI) / this.cardsCount;
  }

  init() {
    document.addEventListener('DOMContentLoaded', async () => {
      await this.waitForImagesLoaded();
      this.initStage();
    });
  }

  initStage() {
    const image = this.images[0];
    const imageHeight = image.clientHeight;
    const radius1 = 50 + imageHeight / 2;
    const radius2 = 250 - radius1;

    gsap
      .timeline()
      .from(this.cards, {
        y: window.innerHeight / 2 + imageHeight * 1.5,
        rotateX: -180,
        stagger: 0.1,
        duration: 0.5,
        opacity: 0.8,
        scale: 3,
      })
      .set(this.cards, {
        transformOrigin: `center ${radius1 + imageHeight / 2}px`,
      })
      .set(this.cardsGroup, {
        transformStyle: 'preserve-3d',
      })
      .to(this.cards, {
        y: -radius1,
        duration: 0.5,
        ease: 'power1.out',
      })
      .to(
        this.cards,
        {
          rotation: (index) => {
            return (index * 360) / this.cardsCount;
          },
          rotateY: 15,
          duration: 1,
          ease: 'power1.out',
        },
        '<'
      )
      .to(this.cards, {
        // Expand the radius
        x: (index) => {
          return Math.round(
            radius2 * Math.cos(this.sliceAngle * index - Math.PI / 4)
          );
        },
        y: (index) => {
          return (
            Math.round(
              radius2 * Math.sin(this.sliceAngle * index - Math.PI / 4)
            ) - radius1
          );
        },
        rotation: (index) => {
          return (index + 1) * (360 / this.cardsCount);
        },
      })
      .to(
        this.cards,
        {
          rotateY: 180,
          opacity: 0.8,
          duration: 1,
        },
        '<'
      )
      // .from(
      //   '.headings',
      //   {
      //     opacity: 0,
      //     filter: 'blur(60px)',
      //     duration: 1,
      //   },
      //   '<'
      // )
      .to(this.cardList, {
        repeat: -1,
        duration: 2,
        onRepeat: () => {
          gsap.to(cardList[Math.floor(Math.random() * this.cardsCount)], {
            rotateY: '+=180',
          });
        },
      })
      .to(
        this.cardsGroup,
        {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: 'none',
        },
        '<-=2'
      );
  }

  waitForImagesLoaded() {
    return new Promise((resolve) => {
      imageLoaded(this.images, resolve);
    });
  }
}

new Stage().init();
