import {Component, VERSION} from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public pageTitle: string = 'Welcome';
  public angularVersion: string = VERSION.full;
}
