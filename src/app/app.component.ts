import { Component } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'base-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'base-web';
}
