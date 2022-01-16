import { Nav } from './nav.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConstantsService } from '../../constants.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  nav = new Nav();

  constructor(public translateService: TranslateService, private constantsService: ConstantsService) { }


  ngOnInit(): void {
    this.gettranslateServicedMenu();
  }

  gettranslateServicedMenu(): void {
    this.translateService.get('NAV').subscribe( () => {
      this.nav.menu = this.constantsService.menu;
    })
  }

}
