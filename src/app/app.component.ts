import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {APIServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dhemax-test-front';

  dataSource : any[] = [];

  constructor(private service : APIServiceService){
    this.service.getData().then(data => {
      this.dataSource = data;
    });
  }
}
