import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UtilService } from '../../shared/services/util.service';
import { Transporter } from '../models/transporter.model';
import { TransportersStore } from './transporters.store';

@Injectable({ providedIn: 'root' })
export class TransportersService {

  transporters: Transporter[] = [
    {id: 1, name: 'ABC Transporter', code: 'ABC Transporter', address: 'Test', contact_phone: '0912333442'}
  ];
  constructor(private transportersStore: TransportersStore,
    private http: HttpClient,
    private utilService: UtilService) {
  }


  get() {
    const url = `${environment.apiUrl}/transporters`;
    return this.http.get(url).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          this.transportersStore.set(response.data);
        } else {
          this.utilService.showErrorMessage(response.error);
        }
      }, error: () => this.utilService.showErrorMessage('Error')})
    )
  }

  add(transporter: Transporter) {
    const url = `${environment.apiUrl}/transporters`;
    return this.http.post(url, {transporter}).pipe(
      tap({
        next: (response: any) => {
          if (response.success) {
            this.transportersStore.add(response.data);
          } else {
            this.utilService.showErrorMessage(response.error);
          }
        }, error: () => this.utilService.showErrorMessage('Error')
      })
    )
  }

  update(id: any, transporter: Partial<Transporter>) {
    const url = `${environment.apiUrl}/transporters/${id}`;
    return this.http.put(url, { transporter }).pipe(
      tap({
        next: (response: any) => {
          if (response.success) {
            this.transportersStore.update(id, response.data);
          } else {
            this.utilService.showErrorMessage(response.error);
          }
        }, error: () => this.utilService.showErrorMessage('Error')
      })
    )
  }

  remove(id: ID) {
    const url = `${environment.apiUrl}/transporters/${id}`;
    return this.http.delete(url).pipe(
      tap({
        next: (response: any) => {
          if (response.success) {
            this.transportersStore.remove(id);
          } else {
            this.utilService.showErrorMessage(response.error);
          }
        }, error: () => this.utilService.showErrorMessage('Error')
      })
    )
  }
}
