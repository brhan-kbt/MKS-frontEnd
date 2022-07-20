import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { TransporterComponent } from './components/container/transporter/transporter.component';
import { SharedModule } from '../shared/shared.module';
import { TransporterFormComponent } from './components/ui/transporter-form/transporter-form.component';
import { AppCommonModule } from '../app.common.module';
import { TransportOfferComponent } from './components/container/transport-offer/transport-offer.component';
import { TransportOfferFormComponent } from './components/ui/transport-offer-form/transport-offer-form.component';
import { TransportOfferItemComponent } from './components/container/transport-offer-item/transport-offer-item.component';
import { TransportOfferItemFormComponent } from './components/ui/transport-offer-item-form/transport-offer-item-form.component';


@NgModule({
  declarations: [
    TransporterComponent,
    TransporterFormComponent,
    TransportOfferComponent,
    TransportOfferFormComponent,
    TransportOfferItemComponent,
    TransportOfferItemFormComponent
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
