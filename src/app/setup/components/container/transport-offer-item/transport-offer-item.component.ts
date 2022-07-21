import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EMPTY_OFFER_ITEM, OfferItem } from 'src/app/setup/models/offer-item.model';
import { OfferItemsQuery } from 'src/app/setup/state/offer-items.query';
import { OfferItemsService } from 'src/app/setup/state/offer-items.service';
import { Column } from 'src/app/shared/models/column.model';
import { TransportOfferItemFormComponent } from '../../ui/transport-offer-item-form/transport-offer-item-form.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-transport-offer-item',
  templateUrl: './transport-offer-item.component.html',
  styleUrls: ['./transport-offer-item.component.scss']
})
export class TransportOfferItemComponent implements OnInit {

  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
  ]

  columns: Column[] = [
    { name: 'transport_offer_id', label: 'Transport Offer' },
    { name: 'transport_bid_item_id', label: 'Transport Bid Item ID' },
    { name: 'price', label: 'Offer Date' },
  ];

  offerItems: OfferItem[] = [];

  offerItems$: Observable<OfferItem[]> = this.query.selectAll();

  id: number;

  constructor(private dialog: MatDialog,
    private service: OfferItemsService,
    private query: OfferItemsQuery,
    private route: ActivatedRoute) {

    this.route.params.subscribe((data: any) => {
      this.id = data.id;
    });
  }

  ngOnInit(): void {
    this.service.get(this.id);    
  }


  onEdit(event: any): void {

    const dialogRef = this.dialog.open(TransportOfferItemFormComponent, {
      disableClose: true,
      data: event.item
    });
    
    (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      this.service.update(data.id, data);
      dialogRef.close();
    });

    (dialogRef.componentInstance as any).formCancel.subscribe(() => {
      dialogRef.close();
    });
  }

  onAdd(event: any): void {
    const dialogRef = this.dialog.open(TransportOfferItemFormComponent, {
      disableClose: true,
      data: EMPTY_OFFER_ITEM
    });

    (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      data.id = Math.floor(Math.random()*1000);
      data.transport_offer_id = this.id;
      data.winner = false;
      data.rank = 0;
      this.service.add(data);
      dialogRef.close();
    });

    (dialogRef.componentInstance as any).formCancel.subscribe(() => {
      dialogRef.close();
    });
  }


}
