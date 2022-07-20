import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportOfferComponent } from './setup/components/container/transport-offer/transport-offer.component';
import { TransporterComponent } from './setup/components/container/transporter/transporter.component';

const routes: Routes = [
  {path: 'transporters', component: TransporterComponent},
  {path: 'transport-offer', component: TransportOfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
