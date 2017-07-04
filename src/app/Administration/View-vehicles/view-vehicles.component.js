"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ViewVehiclesComponent = (function () {
    function ViewVehiclesComponent() {
        this.selectedUser = '';
        this.users = [
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
        this.roles = [
            { value: 'role-1', viewValue: 'Role 1' },
            { value: 'role-2', viewValue: 'Role 2' },
            { value: 'role-3', viewValue: 'Role 3' }
        ];
    }
    ViewVehiclesComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    return ViewVehiclesComponent;
}());
ViewVehiclesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'view-vehicles-app',
        templateUrl: "view-vehicles.html",
        styleUrls: ['/src/style.css'],
    })
], ViewVehiclesComponent);
exports.ViewVehiclesComponent = ViewVehiclesComponent;
//# sourceMappingURL=view-vehicles.component.js.map