import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = [];

  getUserData(ngFormObj: NgForm) {
    let userObj = ngFormObj.value;
    //push userObj to users array
    this.users.push(userObj);

    ngFormObj.reset();
  }

  deleteUserObj(index) {
    this.users.splice(index, 1);
  }
}
