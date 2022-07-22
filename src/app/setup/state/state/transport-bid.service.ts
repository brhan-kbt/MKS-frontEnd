import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { TransportBid } from '../../models/transport_bid.model';
import { TransportBidStore } from './transport-bid.store';

@Injectable({ providedIn: 'root' })
export class TransportBidService {

  transportBid: TransportBid[] = [
    {
      id: 1,
      reference_no:'44ddfd',
      description:'description',
      opening_date:null,
      status:'active',
      start_date:null,
      end_date:null,
      transport_plan_id:10,
      bid_bond_amount:189000
    },
    {
      id: 2,
      reference_no:'44ddfd',
      description:'description',
      opening_date:null,
      status:'active',
      start_date:null,
      end_date:null,
      transport_plan_id:10,
      bid_bond_amount:189000
    },

    {
      id: 3,
      reference_no:'44ddfd',
      description:'description',
      opening_date:null,
      status:'active',
      start_date:null,
      end_date:null,
      transport_plan_id:10,
      bid_bond_amount:189000
    },

    {
      id: 4,
      reference_no:'44ddfd',
      description:'description',
      opening_date:null,
      status:'active',
      start_date:null,
      end_date:null,
      transport_plan_id:10,
      bid_bond_amount:189000
    },

    {
      id: 5,
      reference_no:'44ddfd',
      description:'description',
      opening_date:null,
      status:'active',
      start_date:null,
      end_date:null,
      transport_plan_id:10,
      bid_bond_amount:189000
    }
  ];
  constructor(private transportBidStore: TransportBidStore,
    private http: HttpClient,
    private utilService: UtilService) {
  }
  
  get() {
    return this.transportBidStore.set(this.transportBid);
  }

  add(transportBidItem: TransportBid) {
    this.transportBidStore.add(transportBidItem);
  }

  update(id: any, transportBidItem: Partial<TransportBid>) {
    this.transportBidStore.update(id, transportBidItem);
  }

  remove(id: ID) {
    this.transportBidStore.remove(id);
  }
  // get() {
  //   const url = `${environment.apiUrl}/transport_bid`;
  //   return this.http.get(url).pipe(
  //     tap({next: (response: any) => {
  //       if (response.success) {
  //         this.transportBidStore.set(response.data);
  //       } else {
  //         this.utilService.showErrorMessage(response.error);
  //       }
  //     }, error: () => this.utilService.showErrorMessage('Error')})
  //   )
  // }

  // add(transport_bid: TransportBid) {
  //   const url = `${environment.apiUrl}/transport_bid`;
  //   return this.http.post(url, {transport_bid}).pipe(
  //     tap({
  //       next: (response: any) => {
  //         if (response.success) {
  //           this.transportBidStore.add(response.data);
  //         } else {
  //           this.utilService.showErrorMessage(response.error);
  //         }
  //       }, error: () => this.utilService.showErrorMessage('Error')
  //     })
  //   )
  // }

  // update(id: any, transport_bid: Partial<TransportBid>) {
  //   const url = `${environment.apiUrl}/transport_bid/${id}`;
  //   return this.http.put(url, { transport_bid }).pipe(
  //     tap({
  //       next: (response: any) => {
  //         if (response.success) {
  //           this.transportBidStore.update(id, response.data);
  //         } else {
  //           this.utilService.showErrorMessage(response.error);
  //         }
  //       }, error: () => this.utilService.showErrorMessage('Error')
  //     })
  //   )
  // }

  // remove(id: ID) {
  //   const url = `${environment.apiUrl}/transport_bid/${id}`;
  //   return this.http.delete(url).pipe(
  //     tap({
  //       next: (response: any) => {
  //         if (response.success) {
  //           this.transportBidStore.remove(id);
  //         } else {
  //           this.utilService.showErrorMessage(response.error);
  //         }
  //       }, error: () => this.utilService.showErrorMessage('Error')
  //     })
  //   )
  //}
}