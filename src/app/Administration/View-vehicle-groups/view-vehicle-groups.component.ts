import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'view-vehicle-groups-app',
  templateUrl: `./view-vehicle-groups.html`,
})

export class ViewVehicleGroupsComponent {
  checked = false;
  selectedUser = '';

  users = [
    {
      vehicleGroupName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleGroupName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleGroupName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleGroupName: 'Narth Vans',
      customers: 'Cust 1, Cust 2',
      vehicles: 'RH66 ONB, KU66 YJY',
      created: '12/01/17'
    },
    {
      vehicleGroupName: 'Narth Vans',
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
