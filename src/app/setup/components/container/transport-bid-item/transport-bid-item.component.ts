import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EMPTY_TRANSPORT_BID_ITEM } from 'src/app/setup/models/transport_bid_item.model';
import { TransportBidItem } from 'src/app/setup/models/transport_bid_item.model';
import { TransportBidItemQuery } from 'src/app/setup/state/state/transport-bid-item.query';
import { TransportBidItemService } from 'src/app/setup/state/state/transport-bid-item.service';
import { Column } from 'src/app/shared/models/column.model';
import { TransportBidItemFormComponent } from '../../ui/transport-bid-item-form/transport-bid-item-form.component';

@Component({
  selector: 'app-transport-bid-item',
  templateUrl: './transport-bid-item.component.html',
  styleUrls: ['./transport-bid-item.component.scss']
})
export class TransportBidItemComponent implements OnInit {

  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit'},
    { icon: 'description', color: 'primary', tooltip: 'Details'}
  ]

  columns: Column[] = [
    { name: 'transport_bid_id', label: 'Transport Bid Id'},
    { name: 'transport_plan_item_id', label: 'Transport Plan Item_id'},
    { name: 'quantity', label: 'Quantity'},
    { name: 'unit', label: 'Unit'}
  ];

  transport_bid_item: TransportBidItem[] = [];

  
  transport_bid_item$: Observable<TransportBidItem[]> = this.query.selectAll();
  id:number;

  constructor(private dialog: MatDialog,
    private service:TransportBidItemService,
    private query: TransportBidItemQuery,
    private route: ActivatedRoute) {
    }

   

  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
      this.id=data.id;
    })
   this.service.get(this.id);
  }
  
  onEdit(event: any): void {
    const dialogRef = this.dialog.open(TransportBidItemFormComponent, {
      disableClose: true,
      data: event.item
     });
     
     (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
        this.service.update(data.id, data);
        dialogRef.close();
     });
  }

  onAdd(event: any): void {
    const datas={...EMPTY_TRANSPORT_BID_ITEM, 'transport_bid_id':this.id};
   const dialogRef = this.dialog.open(TransportBidItemFormComponent, {
    disableClose: true,
    data: datas
   });
   
   (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
    console.log(data);
    
      this.service.add(data);
      dialogRef.close();
   });
  }
}