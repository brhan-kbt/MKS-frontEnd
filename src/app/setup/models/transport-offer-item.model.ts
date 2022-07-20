export interface TransportOfferItem {
  id: number;
  transport_offer_id: number;
  transport_bid_item_id: number;
  price: number;
  winner: boolean;
  rank: number;
}

export const EMPTY_TRANSPORT_OFFER_ITEM: TransportOfferItem = {
  id: null,
  transport_offer_id: null,
  transport_bid_item_id: null,
  price: null,
  winner: false,
  rank: null,
}