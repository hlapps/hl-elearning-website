import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Student } from '../models/student';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css'],
  providers: [UsersService]
})
export class FormloginComponent implements OnInit {
  private user: User;
  private errorMessage: string;
  private showAlert: boolean;

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.user = new User(null, null, null, null);
    this.showAlert = false;
  }

  onSubmit(isValid: boolean) {
    if (isValid) {
      console.log(this.user);
      this._usersService.authUser(this.user)
        .subscribe(
        (result) => {
          localStorage.setItem('hl-elearning-token', result.id_token);
          window.location.href = 'http://dashboard.ensenanzavirtualensalud.com/';
        }, (error) => {
          let errorBody = JSON.parse(error._body);
          this.errorMessage = errorBody.message;
          alert(this.errorMessage);

        });
    } else {
      this.errorMessage = "Debes diligenciar todos los campos"
      this.showAlert = true;
      setTimeout(() => { this.showAlert = false; }, 3000);
    }
  }

}
