import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidatorFn,
  FormGroup,
  ValidationErrors,
  AbstractControl,
  FormArray,
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
      apodos: this.fb.array([''])
    },
    { validators: passwordsMatchValidator }
  );

  constructor(private fb: FormBuilder, private usernameSvc: UsernameService) {}

  ngOnInit() {
    this.loginForm.controls.email.setAsyncValidators((ctrl: AbstractControl) =>
      this.usernameSvc
        .emailTaken(ctrl.value)
        .then((isTaken) => (isTaken ? { emailTaken: true } : null))
    );
  }

  addApodo() {
    this.apodos.push(this.fb.control(''));
  }

  get apodos() {
    return this.loginForm.controls.apodos as FormArray;
  }
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
