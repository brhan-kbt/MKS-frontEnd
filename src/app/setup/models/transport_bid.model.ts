export interface TransportBid {
    id: number;
    reference_no:string;
    description:string;
    start_date:Date;
    end_date:Date;
    opening_date:Date;
    status:string;
    transport_plan_id:number;
    bid_bond_amount:number;
}

export const EMPTY_TRANSPORT_BID: TransportBid = {
    id: null,
    reference_no:'',
    description:'',
    opening_date:null,
    status:'',
    start_date:null,
    end_date:null,
    transport_plan_id:null,
    bid_bond_amount:null
}
