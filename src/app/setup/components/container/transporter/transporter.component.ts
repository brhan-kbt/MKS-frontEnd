import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransporterFormComponent } from '../../ui/transporter-form/transporter-form.component';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.scss']
})
export class TransporterComponent implements OnInit {
  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAdd(event: any): void {
   this.dialog.open(TransporterFormComponent, {
    disableClose: true
   });
   
  }
}
