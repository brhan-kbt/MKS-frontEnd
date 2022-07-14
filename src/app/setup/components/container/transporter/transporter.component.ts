import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Column } from '../../../../shared/models/column.model';
import { EMPTY_TRANSPORTER, Transporter } from '../../../models/transporter.model';
import { TransportersQuery } from '../../../state/transporters.query';
import { TransportersService } from '../../../state/transporters.service';
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

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit'}
  ]

  columns: Column[] = [
    { name: 'code', label: 'Code'},
    { name: 'name', label: 'Name'},
    { name: 'address', label: 'Address'},
    { name: 'contact_phone', label: 'Contact Phone'},
  ];

  transporters: Transporter[] = [];

  transporters$: Observable<Transporter[]> = this.query.selectAll();
  
  constructor(private dialog: MatDialog,
    private service:TransportersService,
    private query: TransportersQuery) { }

  ngOnInit(): void {
   this.service.get();
  }
  
  onEdit(event: any): void {
    const dialogRef = this.dialog.open(TransporterFormComponent, {
      disableClose: true,
      data: event.item
     });
     
     (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
        this.service.update(data.id, data);
        dialogRef.close();
     });
  }

  onAdd(event: any): void {
   const dialogRef = this.dialog.open(TransporterFormComponent, {
    disableClose: true,
    data: EMPTY_TRANSPORTER
   });
   
   (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      const payload = {...data, id: Math.floor(Math.random()*10000)};
      this.service.add(payload);
      dialogRef.close();
   });
  }
}
