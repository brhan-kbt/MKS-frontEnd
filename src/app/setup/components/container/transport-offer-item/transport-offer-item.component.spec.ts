import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOfferItemComponent } from './transport-offer-item.component';

describe('TransportOfferItemComponent', () => {
  let component: TransportOfferItemComponent;
  let fixture: ComponentFixture<TransportOfferItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportOfferItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportOfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
