import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { OfferItem } from '../models/offer-item.model';
import { OfferItemsStore } from './offer-items.store';

@Injectable({ providedIn: 'root' })
export class OfferItemsService {

  offer_items: OfferItem[] = [
    {id: 1, transport_offer_id: 1, transport_bid_item_id: 1, price: 10000, winner: false, rank: 2},
    {id: 2, transport_offer_id: 1, transport_bid_item_id: 2, price: 20000, winner: true, rank: 1},
    {id: 3, transport_offer_id: 2, transport_bid_item_id: 1, price: 15000, winner: true, rank: 1},
    {id: 4, transport_offer_id: 2, transport_bid_item_id: 2, price: 18000, winner: false, rank: 2},
    {id: 5, transport_offer_id: 2, transport_bid_item_id: 2, price: 17500, winner: false, rank: 3}
  ];

  constructor(private OfferItemsStore: OfferItemsStore) {
  }


  get() {
    this.OfferItemsStore.set(this.offer_items);
  }

  add(OfferItem: OfferItem) {
    this.OfferItemsStore.add(OfferItem);
  }

  update(id: any, OfferItem: Partial<OfferItem>) {
    this.OfferItemsStore.update(id, OfferItem);
  }

  remove(id: ID) {
    this.OfferItemsStore.remove(id);
  }

}
