import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../_models/user';
import { UserService } from '../../_services/index';

@Component({
  moduleId: module.id,
  selector: 'preference-app',
  templateUrl: `./preference.html`,
})

export class PreferenceComponent {
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
