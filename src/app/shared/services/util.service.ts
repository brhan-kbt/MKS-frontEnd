import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private messageService: MessageService, public dialog: MatDialog) { }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity,
      summary,
      life: 4000,
      detail,
      closable: false,
    });
  }

  openDialog(component: any, height?: string, width?: string, data?: any, disableClose?: boolean) {
    const dialogRef = this.dialog.open(component,  {
      height,
      width,
      data,
      disableClose
    });
    return dialogRef;
  }

  titleCase(str: string) {
    return str?.toLowerCase().split(' ').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  showErrorMessage(error: string): void {
    this.showMessage('error', 'Error', error);
  }
}
