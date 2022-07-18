import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

import { TransporterComponent } from './transporter.component';

describe('TransporterComponent', () => {
  let component: TransporterComponent;
  let fixture: ComponentFixture<TransporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporterComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers: [
        MessageService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
