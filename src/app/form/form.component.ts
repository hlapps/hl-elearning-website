import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [UsersService]
})
export class FormComponent implements OnInit {
  private user: User;
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.user = new User('', '', '', 'elearning');
  }

  onSubmit() {
    console.log(this.user);
  }

}
