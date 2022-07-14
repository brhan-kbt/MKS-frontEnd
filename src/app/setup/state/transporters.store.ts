import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Transporter } from '../models/transporter.model';

export interface TransportersState extends EntityState<Transporter> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transporters' })
export class TransportersStore extends EntityStore<TransportersState> {

  constructor() {
    super();
  }

}
