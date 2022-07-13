import { Injectable } from '@angular/core';
import { Transporter } from '../models/transporter.model';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {
  transporters: Transporter[] = [
    {id: 1, code: 'ABC Transporter', name: "ABC Transporter", address: 'Test Address', contact_phone: '0912334455'}
  ];

  constructor() { }

  get(): Transporter[] {
    return this.transporters;
  }

  add(transporter: Transporter): void {
    this.transporters.push(transporter);
  }

  update(id: any, newTransporter: Transporter): void {
    for (let transporter of this.transporters) {
      if (id === transporter.id) {
        transporter = newTransporter;
        // transporter.code = newTransporter.code;
        // transporter.name = newTransporter.name;
        // transporter.address = newTransporter.address;
        // transporter.contact_phone = newTransporter.contact_phone;
      }
    }
  }
}
