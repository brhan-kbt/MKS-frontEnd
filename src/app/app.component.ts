import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transport-management';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  homeClicked(): void {
    this.router.navigate(['/'])
  }

  onTransporter(): void {
    this.router.navigate(['/transporters'], {relativeTo: this.route})
  }

  onTransportBid()
  {
    this.router.navigate(['/transport_bid'], {relativeTo: this.route})
  }

  onTransportBidItem()
  {
    this.router.navigate(['/transport_bid_item'], {relativeTo: this.route})
  }


}
