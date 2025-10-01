import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view.component',
  imports: [],
  templateUrl: './details.page.html',
  styleUrl: './details.page.css',
})
export class DetailViewComponent {
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    console.log(this.activatedRoute.queryParams);
  }
}
