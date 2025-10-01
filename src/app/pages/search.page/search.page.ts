import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-view.component',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './search.page.html',
  styleUrl: './search.page.css',
})
export class SearchViewComponent {
  readonly email = new FormControl('');
}
