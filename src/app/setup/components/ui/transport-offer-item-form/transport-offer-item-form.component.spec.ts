import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOfferItemFormComponent } from './transport-offer-item-form.component';

describe('TransportOfferItemFormComponent', () => {
  let component: TransportOfferItemFormComponent;
  let fixture: ComponentFixture<TransportOfferItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportOfferItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportOfferItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
