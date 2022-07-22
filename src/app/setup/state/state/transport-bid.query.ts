import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransportBidStore, TransportBidState } from './transport-bid.store';

@Injectable({ providedIn: 'root' })
export class TransportBidQuery extends QueryEntity<TransportBidState> {

  constructor(protected override  store: TransportBidStore) {
    super(store);
  }

}
