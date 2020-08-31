import { Component, VERSION, ViewChild } from '@angular/core';
import { HostDirective } from './host.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  @ViewChild(HostDirective, {static: true}) childRef: HostDirective


}
