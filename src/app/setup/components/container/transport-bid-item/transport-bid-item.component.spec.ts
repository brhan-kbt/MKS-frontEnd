import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBidItemComponent } from './transport-bid-item.component';

describe('TransportBidItemComponent', () => {
  let component: TransportBidItemComponent;
  let fixture: ComponentFixture<TransportBidItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportBidItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
