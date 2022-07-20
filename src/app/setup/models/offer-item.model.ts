export interface OfferItem {
  id: number;
  transport_offer_id: number;
  transport_bid_item_id: number;
  price: number;
  winner: boolean;
  rank: number;
}

export const EMPTY_OFFER_ITEM: OfferItem = {
  id: null,
  transport_offer_id: null,
  transport_bid_item_id: null,
  price: null,
  winner: false,
  rank: null,
}