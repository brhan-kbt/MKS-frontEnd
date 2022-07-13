import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { TransporterComponent } from './components/container/transporter/transporter.component';
import { SharedModule } from '../shared/shared.module';
import { TransporterFormComponent } from './components/ui/transporter-form/transporter-form.component';
import { AppCommonModule } from '../app.common.module';


@NgModule({
  declarations: [
    TransporterComponent,
    TransporterFormComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule,
    AppCommonModule
  ],
  exports: [
    TransporterComponent
  ]
})
export class SetupModule { }
