import { Menu } from './../shared/components/nav/nav.model';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { TranslateService } from '@ngx-translate/core';

import { Nav } from '../shared/components/nav/nav.model';
import { ConstantsService } from '../shared/constants.service';

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private translateService: TranslateService, private constantsServices: ConstantsService) { }
  menus: Menu[] = []
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    // navigation: true,
    loop: true,
    autoplay: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  ngOnInit(): void {
    this.getTranslatedMenu();
  }

  getTranslatedMenu(): void {
    this.translateService.get('NAV').subscribe( () => {
      this.menus = this.constantsServices.menu;
      this.menus.pop();
      this.menus.shift();
    })
  }


}

