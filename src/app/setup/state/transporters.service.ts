import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Transporter } from '../models/transporter.model';
import { TransportersStore } from './transporters.store';

@Injectable({ providedIn: 'root' })
export class TransportersService {

  transporters: Transporter[] = [
    {id: 1, name: 'ABC Transporter', code: 'ABC Transporter', address: 'Test', contact_phone: '0912333442'}
  ];
  constructor(private transportersStore: TransportersStore) {
  }


  get() {
    this.transportersStore.set(this.transporters);
  }

  add(transporter: Transporter) {
    this.transportersStore.add(transporter);
  }

  update(id: any, transporter: Partial<Transporter>) {
    this.transportersStore.update(id, transporter);
  }

  remove(id: ID) {
    this.transportersStore.remove(id);
  }

}
