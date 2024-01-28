import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword = true;
  newPassword = true;
  confirmPassword = true;
  changePasswordForm:any = FormGroup;
  responseMessage:any;

  constructor() { }

  ngOnInit(): void {
  }

}
