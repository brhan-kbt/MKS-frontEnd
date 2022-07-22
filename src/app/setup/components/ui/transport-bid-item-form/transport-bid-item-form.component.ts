import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transport-bid-item-form',
  templateUrl: './transport-bid-item-form.component.html',
  styleUrls: ['./transport-bid-item-form.component.scss']
})
export class TransportBidItemFormComponent implements OnInit {

  @Output() formSubmit  = new EventEmitter;
  form:FormGroup;

  transportPlanItems=[
    {'id':1, 'route_id':1, 'tansport_plan_id':1, 'quantity':11, 'unit_id':1, 'planned':true},
    {'id':2, 'route_id':2, 'tansport_plan_id':2, 'quantity':14, 'unit_id':4, 'planned':false},
    {'id':3, 'route_id':3, 'tansport_plan_id':3, 'quantity':10, 'unit_id':5, 'planned':true}
  ]
  constructor(private fb:FormBuilder,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      this.form=this.fb.group({
        id: data.id,  
        transport_bid_id:[data.transport_bid_id, [Validators.required]],
        transport_plan_item_id:[data.transport_plan_item_id, [Validators.required]],
        quantity:[data.quantity, [Validators.required, Validators.min(1)]],
        unit:[data.unit, [Validators.required, Validators.min(1)]]

      })
    }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const data=this.form.value;
    this.formSubmit.emit(data);
  }

  onCancel(){
    this.dialog.closeAll();
  }
  getErrorMessage(formControl: string): string | void {
    if (formControl === "quantity") {
      if (this.form.get('quantity').hasError('required')) {
        return 'This field is required';
      }
      if (this.form.get('quantity').hasError('min')) {
        return 'Minimum Quantity is 1';
      }
    } 

    if(formControl==='unit'){
      if(this.form.get('unit').hasError('required')){
        return 'This field is required';
      }
      if(this.form.get('unit').hasError('min')){
        return 'Minimum Unit is 1'
      }
    }
    else {
      if (this.form.get(formControl).hasError('required')) {
        return 'This field is required';
      }
    }
  }

}
