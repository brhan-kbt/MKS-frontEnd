import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TransportOffer } from './transport-offer.model';

export interface TransportOffersState extends EntityState<TransportOffer> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transport-offers' })
export class TransportOffersStore extends EntityStore<TransportOffersState> {

  constructor() {
    super();
  }

}
