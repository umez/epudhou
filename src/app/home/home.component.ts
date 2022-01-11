import { HomeService } from './home.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Nav } from '../shared/model/nav.model';
import { ConstantsService } from '../shared/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private translateService: TranslateService, private constantsServices: ConstantsService) { }
  menus: Nav[] = []

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

