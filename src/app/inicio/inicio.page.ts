import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { IonSlides, IonSegment } from '@ionic/angular';


import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {

    @ViewChild('slider') slider;

    segmentModel:String = "restaurantes"
    slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView: 1,
        effect: 'cube',
        noSwipingClass: 'swiper-no-swiping',
        grabCursor: true,
        freeMode: true,
        freeModeSticky: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: false,
          },
        
        // pagination: {
        //     el: '.swiper-pagination',
        //     modifierClass: 'paginacao'
        // }
      }

    segmentChanged(){}
    constructor(platform: Platform) {
        platform.ready().then(() => {
          console.log('Width: ' + platform.width());
          console.log('Height: ' + platform.height());
          
        });
      }

    ngAfterViewChecked(){
        this.slider.update();
    }

    

}
