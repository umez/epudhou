import { FormControl } from "@angular/forms";
import { Nav } from "../../model/nav.model";

export class HeaderModel {
  constructor(
    public playMusic: boolean = true,
    public lang: FormControl = new FormControl('en'),
    public menu: Nav [] =[],
    public showMenu: boolean = false
  ) {}
}





