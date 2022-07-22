import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportBidItemComponent } from './setup/components/container/transport-bid-item/transport-bid-item.component';
import { TransportBidComponent } from './setup/components/container/transport-bid/transport-bid.component';
import { TransporterComponent } from './setup/components/container/transporter/transporter.component';

const routes: Routes = [
  {
    path: 'transporters', 
    component: TransporterComponent
  },
  {
    path: 'transport_bid', 
    component:TransportBidComponent
  },
  {
    path: 'transport_bid_item/:id',
    component:TransportBidItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
