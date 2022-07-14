import { Injectable } from '@angular/core';
import { Transporter } from '../models/transporter.model';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {
  transporters: Transporter[] = [
    {id: 1, code: 'ABC Transporter', name: "ABC Transporter", address: 'Test Address', contact_phone: '0912334455'},
    {id: 2, code: 'ZZZ Transporter', name: "ZZZ Transporter", address: 'ZZZ Test Address', contact_phone: '0912334455'},
  ];

  constructor() { }

  get(): Transporter[] {
    return this.transporters;
  }

  add(transporter: Transporter): void {
    this.transporters.push(transporter);
  }

  update(id: any, newTransporter: Transporter): void {
    this.transporters = this.transporters.map((transporter) => transporter.id === id ? transporter = newTransporter : transporter);
  }
}
