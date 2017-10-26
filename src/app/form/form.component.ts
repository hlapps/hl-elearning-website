import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Student } from '../models/student';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [UsersService]
})
export class FormComponent implements OnInit {
  private user: User;
  private student: Student;
  private showAlert: boolean;
  private errorMessage: string;

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.user = new User('', '', '', 'elearning');
    this.student = new Student('', '', '', '', '', '', '');
    this.showAlert = false;
    this.errorMessage = "";
  }

  onSubmit(isValid: boolean) {
    if (isValid) {
      console.log(this.user);
      this._usersService.postUser(this.user)
        .subscribe(
        (result) => {
          localStorage.setItem('hl-elearning-token', result.id_token);
          window.location.href = 'http://dashboard.ensenanzavirtualensalud.com/'
        }, (error) => {
          let errorBody = JSON.parse(error._body);
          this.errorMessage = errorBody.message;
          alert(this.errorMessage);
          this.showAlert = true;
          setTimeout(() => { this.showAlert = false; }, 3000);
        });
    } else {
      this.errorMessage = "Debes diligenciar todos los campos"
      this.showAlert = true;
      setTimeout(() => { this.showAlert = false; }, 3000);
    }
  }

}
