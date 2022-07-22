import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { TransportBidItem } from '../../models/transport_bid_item.model';

import { TransportBidItemStore } from './transport-bid-item.store';

@Injectable({ providedIn: 'root' })
export class TransportBidItemService {


  transportBidItem: TransportBidItem[] = [
    {
      id: 1,
      transport_bid_id:1,
      transport_plan_item_id:2,
      quantity:1000,
      unit:12
      
    },
    {
      id: 2,
      transport_bid_id:1,
      transport_plan_item_id:2,
      quantity:1000,
      unit:12
    
    },

    {
      id: 3,
      transport_bid_id:2,
      transport_plan_item_id:2,
      quantity:1000,
      unit:12
      
    }
  ];
  constructor(private transportBidItemStore: TransportBidItemStore, private http: HttpClient) {
  }


  get(id?:number) {
    if(id){
    var filtered_items:TransportBidItem[]=[];

    for(const bidItem of this.transportBidItem){
        if(bidItem.transport_bid_id==id){
          filtered_items.push(bidItem);
        }
    }
    this.transportBidItemStore.set(filtered_items);
  }
  else{
    this.transportBidItemStore.set(this.transportBidItem);
  }

}


  add(transportBidItem: TransportBidItem) {
    this.transportBidItemStore.add(transportBidItem);
  }

  update(id: any, transportBidItem: Partial<TransportBidItem>) {
    this.transportBidItemStore.update(id, transportBidItem);
  }

  remove(id: ID) {
    this.transportBidItemStore.remove(id);
  }

  // get() {
  //   const url = `${environment.apiUrl}/transport_bid_item`;
  //   return this.http.get(url).pipe(
  //     tap({next: (response: any) => {
  //       if (response.success) {
  //         this.transportBidItemStore.set(response.data);
  //       } else {
  //         this.utilService.showErrorMessage(response.error);
  //       }
  //     }, error: () => this.utilService.showErrorMessage('Error')})
  //   )
  // }

  // add(transport_bid_item: TransportBidItem) {
  //   const url = `${environment.apiUrl}/transport_bid_item`;
  //   return this.http.post(url, {transport_bid_item}).pipe(
  //     tap({
  //       next: (response: any) => {
  //         if (response.success) {
  //           this.transportBidItemStore.add(response.data);
  //         } else {
  //           this.utilService.showErrorMessage(response.error);
  //         }
  //       }, error: () => this.utilService.showErrorMessage('Error')
  //     })
  //   )
  // }

  // update(id: any, transport_bid_item: Partial<TransportBidItem>) {
  //   const url = `${environment.apiUrl}/transport_bid_item/${id}`;
  //   return this.http.put(url, { transport_bid_item}).pipe(
  //     tap({
  //       next: (response: any) => {
  //         if (response.success) {
  //           this.transportBidItemStore.update(id, response.data);
  //         } else {
  //           this.utilService.showErrorMessage(response.error);
  //         }
  //       }, error: () => this.utilService.showErrorMessage('Error')
  //     })
  //   )
  // }

  // remove(id: ID) {
  //   const url = `${environment.apiUrl}/transport_bid_item/${id}`;
  //   return this.http.delete(url).pipe(
  //     tap({
  //       next: (response: any) => {
  //         if (response.success) {
  //           this.transportBidItemStore.remove(id);
  //         } else {
  //           this.utilService.showErrorMessage(response.error);
  //         }
  //       }, error: () => this.utilService.showErrorMessage('Error')
  //     })
  //   )
  //}

}
