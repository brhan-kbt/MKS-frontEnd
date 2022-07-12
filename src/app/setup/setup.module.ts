import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { TransporterComponent } from './components/container/transporter/transporter.component';


@NgModule({
  declarations: [
    TransporterComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule
  ],
  exports: [
    TransporterComponent
  ]
})
export class SetupModule { }
