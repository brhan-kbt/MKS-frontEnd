import { DialogConfig } from '../models/dialog-config.model';
import { MatDialogConfig } from '@angular/material/dialog';

export class DialogService {
  static handleDialog(options: DialogConfig) {
    const dialogData = {
      title: options.title,
      formData: options.formData,
      lookupData: options.lookupData
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = dialogData;
    dialogConfig.width = options.width;

    const dialogRef = options.dialog.open(options.formComponent, dialogConfig);
    const submitSub = (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      if (data.id) {
        options.parentComponent?.blockUI.start('Updating...');
        options.service.update(data.id, data).subscribe((result: any) => {
          options.parentComponent?.blockUI.stop();
          if (result.success) {
            dialogRef.close();
          }
        }, () => options.parentComponent?.blockUI.stop());
      } else {
        options.parentComponent?.blockUI.start('Saving...');
        options.service.add(data).subscribe((result: any) => {
          options.parentComponent?.blockUI.stop();
          if (result.success) {
            dialogRef.close();
          }
        }, () => options.parentComponent?.blockUI.stop());
      }
    });
    const closeSub = (dialogRef.componentInstance as any).formClose.subscribe(() => dialogRef.close());
    dialogRef.afterClosed().subscribe(() => {
      submitSub.unsubscribe();
      closeSub.unsubscribe();
    });
    return dialogRef;
  }
}
