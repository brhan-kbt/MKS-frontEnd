import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransportersStore, TransportersState } from './transporters.store';

@Injectable({ providedIn: 'root' })
export class TransportersQuery extends QueryEntity<TransportersState> {

  constructor(protected override store: TransportersStore) {
    super(store);
  }

}
