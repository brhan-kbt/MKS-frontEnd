import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOfferFormComponent } from './transport-offer-form.component';

describe('TransportOfferFormComponent', () => {
  let component: TransportOfferFormComponent;
  let fixture: ComponentFixture<TransportOfferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportOfferFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
