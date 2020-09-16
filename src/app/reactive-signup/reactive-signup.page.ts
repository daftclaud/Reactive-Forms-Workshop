import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidatorFn,
  FormGroup,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { UsernameService } from '../shared/username.service';

const passwordsMatchValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirm');

  return password && confirm && password.value === confirm.value
    ? null
    : { dontMatch: true };
};

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.page.html',
  styleUrls: ['./reactive-signup.page.scss'],
})
export class ReactiveSignupPage implements OnInit {
  loginForm = this.fb.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirm: ['', [Validators.minLength(6), Validators.required]],
    },
    { validators: passwordsMatchValidator }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }
  get confirm() {
    return this.loginForm.controls.confirm;
  }
}
