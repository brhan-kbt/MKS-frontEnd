import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { TransporterComponent } from './components/container/transporter/transporter.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TransporterComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule
  ],
  exports: [
    TransporterComponent
  ]
})
export class SetupModule { }
