import { FormControl } from "@angular/forms";
import { Nav } from "../nav/nav.model";

export class HeaderModel {
  constructor(
    public playMusic: boolean = false,
    public lang: FormControl = new FormControl('en'),
    public showMenu: boolean = false
  ) {}
}





