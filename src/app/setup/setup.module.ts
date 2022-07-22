import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { TransporterComponent } from './components/container/transporter/transporter.component';
import { SharedModule } from '../shared/shared.module';
import { TransporterFormComponent } from './components/ui/transporter-form/transporter-form.component';
import { AppCommonModule } from '../app.common.module';
import { TransportBidComponent } from './components/container/transport-bid/transport-bid.component';
import { TransportBidItemComponent } from './components/container/transport-bid-item/transport-bid-item.component';
import { TransportBidFormComponent } from './components/ui/transport-bid-form/transport-bid-form.component';
import { TransportBidItemFormComponent } from './components/ui/transport-bid-item-form/transport-bid-item-form.component';


@NgModule({
  declarations: [
    TransporterComponent,
    TransporterFormComponent,
    TransportBidComponent,
    TransportBidItemComponent,
    TransportBidFormComponent,
    TransportBidItemFormComponent
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
