import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBidItemFormComponent } from './transport-bid-item-form.component';

describe('TransportBidItemFormComponent', () => {
  let component: TransportBidItemFormComponent;
  let fixture: ComponentFixture<TransportBidItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportBidItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBidItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
