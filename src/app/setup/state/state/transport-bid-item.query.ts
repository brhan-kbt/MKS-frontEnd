import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransportBidItemStore, TransportBidItemState } from './transport-bid-item.store';

@Injectable({ providedIn: 'root' })
export class TransportBidItemQuery extends QueryEntity<TransportBidItemState> {

  constructor(protected override store: TransportBidItemStore) {
    super(store);
  }

}
