import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBidFormComponent } from './transport-bid-form.component';

describe('TransportBidFormComponent', () => {
  let component: TransportBidFormComponent;
  let fixture: ComponentFixture<TransportBidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportBidFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
