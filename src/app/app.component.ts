import { Component } from '@angular/core';
import { OcAngularComponent } from './oc-angular/oc-angular.component';


@Component({
  selector: 'app-root',
  imports: [
    OcAngularComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
