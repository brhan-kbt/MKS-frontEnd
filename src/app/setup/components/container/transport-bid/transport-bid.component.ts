import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EMPTY_TRANSPORT_BID, TransportBid } from 'src/app/setup/models/transport_bid.model';
import { TransportBidQuery } from 'src/app/setup/state/state/transport-bid.query';
import { TransportBidService } from 'src/app/setup/state/state/transport-bid.service';
import { Column } from '../../../../shared/models/column.model';
import { TransportBidFormComponent } from '../../ui/transport-bid-form/transport-bid-form.component';

@Component({
  selector: 'app-transport-bid',
  templateUrl: './transport-bid.component.html',
  styleUrls: ['./transport-bid.component.scss']
})
export class TransportBidComponent implements OnInit {
  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit'},
    { icon: 'description', color: 'primary', tooltip: 'Details'}
  ]

  columns: Column[] = [
    { name: 'reference_no', label: 'Ref_No'},
    { name: 'description', label: 'Description'},
    { name: 'start_date', label: 'Start_Date'},
    { name: 'end_date', label: 'End_Date'},
    { name: 'opening_date', label: 'Opening_Date'},
    { name: 'status', label: 'Status'},
    { name: 'transport_plan_id', label: 'Trans. Plan Id'},
    { name: 'bid_bond_amount', label: 'Bid Bond Amount'},
  ];

  transport_bid: TransportBid[] = [];

  transport_bid$: Observable<TransportBid[]> = this.query.selectAll();
  
  constructor(private dialog: MatDialog,
    private service:TransportBidService,
    private query: TransportBidQuery,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.service.get();
  }
  onClick(event:any){
    if(event.type=='edit'){
      this.onEdit(event);
    }
    if(event.type=='description'){
      this.onDetails(event);
    }
  }
  onDetails(event:any){
    this.router.navigate([`/transport_bid_item/${event.item.id}`], {relativeTo: this.route})
  }
  onEdit(event: any): void {
    const dialogRef = this.dialog.open(TransportBidFormComponent, {
      disableClose: true,
      data: event.item
     });
     
     (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
        this.service.update(data.id, data);
        dialogRef.close();
     });
  }

  onAdd(event: any): void {
   const dialogRef = this.dialog.open(TransportBidFormComponent, {
    disableClose: true,
    
    data: EMPTY_TRANSPORT_BID
   });
   
   (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      console.log(data);
      
      this.service.add(data);
      dialogRef.close();
   });
  }
}
