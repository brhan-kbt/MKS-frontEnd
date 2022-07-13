import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterFormComponent } from './transporter-form.component';

describe('TransporterFormComponent', () => {
  let component: TransporterFormComponent;
  let fixture: ComponentFixture<TransporterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
