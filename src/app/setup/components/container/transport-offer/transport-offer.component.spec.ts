import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOfferComponent } from './transport-offer.component';

describe('TransportOfferComponent', () => {
  let component: TransportOfferComponent;
  let fixture: ComponentFixture<TransportOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
