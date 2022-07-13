import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.scss']
})
export class TransporterComponent implements OnInit {
  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(event: any): void {
   
  }
}
