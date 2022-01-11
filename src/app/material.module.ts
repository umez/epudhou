import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
