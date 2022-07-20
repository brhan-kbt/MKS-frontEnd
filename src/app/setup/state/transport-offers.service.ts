import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { TransportOffer } from '../models/transport-offer.model';
import { TransportOffersStore } from './transport-offers.store';

@Injectable({ providedIn: 'root' })
export class TransportOffersService {

  transport_offers: TransportOffer[] = [
    {id: 1, transport_bid_id: 1, transporter_id: 1, offer_date: '2022-07-14', bid_bond_amount: 1000},
    {id: 2, transport_bid_id: 1, transporter_id: 2, offer_date: '2022-07-19', bid_bond_amount: 1000},
    {id: 3, transport_bid_id: 2, transporter_id: 3, offer_date: '2022-06-30', bid_bond_amount: 1000},
  ];

  constructor(private transportOffersStore: TransportOffersStore) {
  }


  get() {
    this.transportOffersStore.set(this.transport_offers);
  }

  add(transportOffer: TransportOffer) {
    this.transportOffersStore.add(transportOffer);
  }

  update(id: any, transportOffer: Partial<TransportOffer>) {
    this.transportOffersStore.update(id, transportOffer);
  }

  remove(id: ID) {
    this.transportOffersStore.remove(id);
  }

}
