"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ViewUsersComponent = (function () {
    function ViewUsersComponent() {
        this.checked = false;
        this.selectedUser = '';
        this.users = [
            {
                userName: 'Valeria Liberty',
                address: 'Address1, Address2, Town, Country, Postcode',
                nickName: 'Peldi',
                email: 'test@testing.com',
                roles: 'Admin',
                modules: 'Track/Trace',
                customers: 4,
                created: '15/01/17'
            },
            {
                userName: 'Valeria Liberty',
                address: 'Address1, Address2, Town, Country, Postcode',
                nickName: 'Peldi',
                email: 'test@testing.com',
                roles: 'Admin',
                modules: 'Track/Trace',
                customers: 4,
                created: '15/01/17'
            },
            {
                userName: 'Valeria Liberty',
                address: 'Address1, Address2, Town, Country, Postcode',
                nickName: 'Peldi',
                email: 'test@testing.com',
                roles: 'Admin',
                modules: 'Track/Trace',
                customers: 4,
                created: '15/01/17'
            },
            {
                userName: 'Valeria Liberty',
                address: 'Address1, Address2, Town, Country, Postcode',
                nickName: 'Peldi',
                email: 'test@testing.com',
                roles: 'Admin',
                modules: 'Track/Trace',
                customers: 4,
                created: '15/01/17'
            }
        ];
        this.roles = [
            { value: 'role-1', viewValue: 'Role 1' },
            { value: 'role-2', viewValue: 'Role 2' },
            { value: 'role-3', viewValue: 'Role 3' }
        ];
    }
    ViewUsersComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    return ViewUsersComponent;
}());
ViewUsersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'view-users-app',
        templateUrl: "view-users.html",
        styleUrls: ['/src/style.css'],
    })
], ViewUsersComponent);
exports.ViewUsersComponent = ViewUsersComponent;
//# sourceMappingURL=view-users.component.js.map