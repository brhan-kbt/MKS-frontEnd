import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transporter-form',
  templateUrl: './transporter-form.component.html',
  styleUrls: ['./transporter-form.component.scss']
})
export class TransporterFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: null,
      code: '',
      name: '',
      address: '',
      contact_phone: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value);
    
  }
}
