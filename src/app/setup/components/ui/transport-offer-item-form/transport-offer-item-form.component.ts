import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DummyDataService } from 'src/app/setup/state/dummies/dummy-data.service';

@Component({
  selector: 'app-transport-offer-item-form',
  templateUrl: './transport-offer-item-form.component.html',
  styleUrls: ['./transport-offer-item-form.component.scss']
})
export class TransportOfferItemFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  @Output() formCancel = new EventEmitter();

  form: FormGroup;

  bid_items: any[];

  constructor(private fb: FormBuilder, 
    private dummy: DummyDataService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = this.fb.group({
        id: data.id,
        transport_bid_item_id: [data.transport_bid_item_id],
        price: data.price,
        winner: data.winner,
        rank: data.rank
      }); 
     }

  ngOnInit(): void {
    this.bid_items = this.dummy.getBidItems();
  }

  onSubmit(): void {
    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }

  onCancel(): void {
    this.formCancel.emit();
  }

}
