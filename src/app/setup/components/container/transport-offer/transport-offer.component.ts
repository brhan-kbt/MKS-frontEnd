import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EMPTY_TRANSPORT_OFFER, TransportOffer } from 'src/app/setup/models/transport-offer.model';
import { TransportOffersQuery } from 'src/app/setup/state/transport-offers.query';
import { TransportOffersService } from 'src/app/setup/state/transport-offers.service';
import { Column } from 'src/app/shared/models/column.model';
import { TransportOfferFormComponent } from '../../ui/transport-offer-form/transport-offer-form.component';

@Component({
  selector: 'app-transport-offer',
  templateUrl: './transport-offer.component.html',
  styleUrls: ['./transport-offer.component.scss']
})
export class TransportOfferComponent implements OnInit {

  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
    { icon: 'description', color: 'primary', tooltip: 'Offer Items' }
  ]

  columns: Column[] = [
    { name: 'transport_bid_id', label: 'Transport Bid ID' },
    { name: 'transporter_id', label: 'Transporter ID' },
    { name: 'offer_date', label: 'Offer Date' },
    { name: 'bid_bond_amount', label: 'Bid Bond Amount' },
  ];

  transportOffers: TransportOffer[] = [];

  transportOffers$: Observable<TransportOffer[]> = this.query.selectAll();


  constructor(private dialog: MatDialog,
    private service: TransportOffersService,
    private query: TransportOffersQuery) { }

  ngOnInit(): void {
    this.service.get();
  }

  onEdit(event: any): void {
    const dialogRef = this.dialog.open(TransportOfferFormComponent, {
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
    const dialogRef = this.dialog.open(TransportOfferFormComponent, {
      disableClose: true,
      data: EMPTY_TRANSPORT_OFFER
    });

    (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      this.service.add(data);
      dialogRef.close();
    });

    (dialogRef.componentInstance as any).formCancel.subscribe(() => {
      dialogRef.close();
    });
  }


}
