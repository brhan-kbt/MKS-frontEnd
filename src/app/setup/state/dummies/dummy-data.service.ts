import { Injectable } from '@angular/core';

export interface TransportBids{
  id: number;
  reference_no: string;
  description: string;
  start_date: string;
  end_date: string;
  opening_date: string;
  status: string;
  bid_bond_amount: number;
  transport_plan_id: number;
}

export interface BidItems{
  id: number;
  transport_bid_id: number;
  transport_plan_item_id: number;
  quantity: number;
  unit_id: number;
}

export interface Transporter {
  id: number;
  code: string;
  name: string;
  address: string;
  contact_phone: string;
}

@Injectable({
  providedIn: 'root'
})

export class DummyDataService {

  transport_bids: TransportBids[] = [
    {id: 1, reference_no: "abc", description: "something", start_date: "2022-07-10", end_date: "2022-07-15", opening_date: "2022-07-19", status: "open", bid_bond_amount: 1000, transport_plan_id: 1},
    {id: 2, reference_no: "def", description: "something", start_date: "2022-06-20", end_date: "2022-06-25", opening_date: "2022-06-26", status: "closed", bid_bond_amount: 1000, transport_plan_id: 2},
    {id: 3, reference_no: "ghi", description: "something", start_date: "2022-07-12", end_date: "2022-07-17", opening_date: "2022-07-20", status: "open", bid_bond_amount: 1000, transport_plan_id: 2},
  ];

  bid_items: BidItems[] = [
    {id: 1, transport_bid_id: 1, transport_plan_item_id: 1, quantity: 5, unit_id: 1},
    {id: 2, transport_bid_id: 2, transport_plan_item_id: 2, quantity: 3, unit_id: 2},
    {id: 3, transport_bid_id: 1, transport_plan_item_id: 1, quantity: 6, unit_id: 1},
    {id: 4, transport_bid_id: 2, transport_plan_item_id: 3, quantity: 10, unit_id: 3}
  ];

  transporters: Transporter[] = [
    {id: 1, name: 'ABC Transporter', code: 'ABC Transporter', address: 'Test', contact_phone: '0912333442'},
    {id: 2, name: 'DEF Transporter', code: 'DEF Transporter', address: 'Addis', contact_phone: '0912234232'}
  ];

  constructor() { }

  getTransportBids(): TransportBids[]{
    return this.transport_bids;
  }

  getBidItems(): BidItems[]{
    return this.bid_items;
  }

  getTransporters(): Transporter[]{
    return this.transporters;
  }
}
