import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DummyDataService } from 'src/app/setup/state/dummies/dummy-data.service';

@Component({
  selector: 'app-transport-offer-form',
  templateUrl: './transport-offer-form.component.html',
  styleUrls: ['./transport-offer-form.component.scss']
})
export class TransportOfferFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  @Output() formCancel = new EventEmitter();

  form: FormGroup;

  transport_bids: any[];
  transporters: any[];

  constructor(private fb: FormBuilder,
    private dummy: DummyDataService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      id: data.id,
      transport_bid_id: [data.transport_bid_id, [Validators.required]],
      transporter_id: [data.transporter_id, [Validators.required]],
      offer_date: [data.offer_date, [Validators.required]],
      bid_bond_amount: [data.bid_bond_amount, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.transport_bids = this.dummy.getTransportBids();
    this.transporters = this.dummy.getTransporters();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const payload = this.form.value;
      this.formSubmit.emit(payload);
    }
  }

  onCancel(): void {
    this.formCancel.emit();
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
        return 'this field is required';
      }
    }
  }

}
