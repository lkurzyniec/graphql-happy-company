import { Component } from '@angular/core';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRoot: boolean = window.location.pathname === '/';
  isLogged: boolean = false;
  title = 'graphql-happy-company';

  constructor() {
    Auth.currentAuthenticatedUser()
      .then(() => { this.isLogged = true; })
      .catch(() => { this.isLogged = false; });
  }
}
