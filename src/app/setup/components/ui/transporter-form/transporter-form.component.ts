import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transporter-form',
  templateUrl: './transporter-form.component.html',
  styleUrls: ['./transporter-form.component.scss']
})
export class TransporterFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      id: [data.id, [Validators.required]],
      code: [data.code, [Validators.required]],
      name:[ data.name, [Validators.required]],
      address: [data.address, [Validators.required]],
      contact_phone: [data.contact_phone,[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialog.closeAll();
  }
  onSubmit(): void {
    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }


  getErrorMessage(formControl: string): string | void {
      if (this.form.get(formControl).hasError('required')) {
        return 'This field is required';
      }
    }
}

