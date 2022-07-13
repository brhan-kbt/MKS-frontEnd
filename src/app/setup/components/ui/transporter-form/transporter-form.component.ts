import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transporter-form',
  templateUrl: './transporter-form.component.html',
  styleUrls: ['./transporter-form.component.scss']
})
export class TransporterFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      id: data.id,
      code: data.code,
      name: data.name,
      address: data.address,
      contact_phone: data.contact_phone
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }
}
