import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'administration-app',
  templateUrl: `./administration.html`,
})

export class AdministrationComponent {
  constructor(public _router: Router) {}

  getClassActive(path: any) {
    return (this._router.url === path) ? 'active' : '';
  }
}
