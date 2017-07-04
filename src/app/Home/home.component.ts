import { Component, OnInit } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';

import { User } from '../_models/user';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'home-app',
  templateUrl: `./home.html`,
  // directives: [ROUTER_DIRECTIVES],
})

export class HomeComponent {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}
