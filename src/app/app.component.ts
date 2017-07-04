// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }


import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component'

@Component({
  selector: 'datalive-app',
  template: `<header-app></header-app>
  <router-outlet></router-outlet>`,
})
export class AppComponent {  }
