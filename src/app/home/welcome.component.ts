import { Component, VERSION } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public angularVersion:string = VERSION.full;
}
