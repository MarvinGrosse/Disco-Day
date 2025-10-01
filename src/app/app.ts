import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { ItunesApp } from './models/itunes-app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private api: ApiService) {}

  protected readonly title = signal('Disco-Day');

  data$ = new Observable<ItunesApp[]>();

  ngOnInit() {
    this.data$ = this.api.getTestCall();
  }
}
