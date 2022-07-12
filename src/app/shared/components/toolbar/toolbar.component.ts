import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cats-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() actions: any;

  @Output() actionClick = new EventEmitter<any>();

  values: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(type: string) {
    this.actionClick.emit({label: type});
  }
}
