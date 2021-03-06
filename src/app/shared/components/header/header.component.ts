
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConstantsService } from '../../constants.service';
import { HeaderModel } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  header = new HeaderModel(); 

  @ViewChild('audioRef', { static: true })
  audioRef!: HTMLAudioElement; 

  
  constructor(public translateService: TranslateService, private constantsService: ConstantsService) {
    
    this.header.lang.setValue('en');
    translateService.addLangs(['en', 'me']);
    translateService.setDefaultLang('en');
    
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang?.match(/en|me/) ? browserLang : 'en');
  }
  
  changeLang(evt: any): void {
    console.log(evt);
    this.translateService.use(evt)
  }

  showMenu(): void {
    this.header.showMenu = !this.header.showMenu;
  }

  hideMenu(): void {
    this.header.showMenu = false;
  }

  toggleMusic(audio: HTMLAudioElement) {    
    this.header.playMusic = !this.header.playMusic
    if(this.header.playMusic) {
      audio.play();
    } else {
      audio.pause();
    }
  }

}
