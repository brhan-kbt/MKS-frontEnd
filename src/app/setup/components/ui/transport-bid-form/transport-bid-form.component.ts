import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transport-bid-form',
  templateUrl: './transport-bid-form.component.html',
  styleUrls: ['./transport-bid-form.component.scss']
})
export class TransportBidFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

  form: FormGroup;

  transportPlans = [
    {'id':1, 'reference_no':'AS12', 'plan_type':'Type1', 'region_id':12},
    {'id':2, 'reference_no':'AS13', 'plan_type':'Type3', 'region_id':13},
    {'id':3, 'reference_no':'AS14', 'plan_type':'Type2', 'region_id':14},

  ]
  constructor(private fb: FormBuilder,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
     
      id: data.id,
      reference_no:[data.reference_no, [Validators.required]],
      description:[data.description, [Validators.required]],
      start_date:[data.start_date, [Validators.required]],
      end_date:[data.end_date, [Validators.required]],
      opening_date:[data.opening_date, [Validators.required]],
      status:[data.status, [Validators.required]],
      transport_plan_id:[data.transport_plan_id, [Validators.required]],
      bid_bond_amount:[data.bid_bond_amount, [Validators.required, Validators.min(0)]]
    });
   }


  ngOnInit(): void {
  }

  
  onSubmit(): void {
    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }

  onCancel(){
    this.dialog.closeAll();
  }

  getErrorMessage(formControl: string): string | void {
    if (formControl === "bid_bond_amount") {
      if (this.form.get('bid_bond_amount').hasError('required')) {
        return 'this field is required';
      }
      if (this.form.get('bid_bond_amount').hasError('min')) {
        return 'minimum amount is 0';
      }
    } else {
      
      if (this.form.get(formControl).hasError('required')) {
        return 'This field is required';
      }
    }
  }
}
