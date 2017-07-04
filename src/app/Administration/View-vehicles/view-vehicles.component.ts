import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'view-vehicles-app',
  templateUrl: `./view-vehicles.html`,
})

export class ViewVehiclesComponent {
  selectedUser = '';

  users = [
    {
      vehicleName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    }
  ];

  selectUser(user: any) {
    this.selectedUser = user;
  }

  roles = [
    {value: 'role-1', viewValue: 'Role 1'},
    {value: 'role-2', viewValue: 'Role 2'},
    {value: 'role-3', viewValue: 'Role 3'}
  ];
}
