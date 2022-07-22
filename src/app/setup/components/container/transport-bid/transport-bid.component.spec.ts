import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBidComponent } from './transport-bid.component';

describe('TransportBidComponent', () => {
  let component: TransportBidComponent;
  let fixture: ComponentFixture<TransportBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportBidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
