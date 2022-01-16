import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { Menu } from "./components/nav/nav.model";

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(private translateService: TranslateService){}

  get menu(): Menu[] {
    return [
      { label: this.translateService.instant('NAV.ABOUT_US'), url: '/about-us' },
      { label: this.translateService.instant('NAV.SERVICES'), url: '/services' },
      { label: this.translateService.instant('NAV.HISTORY'), url: '/history' },
      { label: this.translateService.instant('NAV.DONATE'), url: '/donate' },
      { label: this.translateService.instant('NAV.BOOK_AN_EVENT'), url: '/book-an-event' },
      { label: this.translateService.instant('NAV.ONLINE_OFFERING'), url: '/online-offering' },
      { label: this.translateService.instant('NAV.GALLERIES'), url: '/galleries' },
      { label: this.translateService.instant('NAV.CONTACT_US'), url: '/contact-us' }
    ]
  }

}

