import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

export class ForgetPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      securityQuestion: ['', Validators.required],
      answer: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm!.valid) {
      console.log('Form submitted:', this.forgotPasswordForm!.value);
    }
  }


}
