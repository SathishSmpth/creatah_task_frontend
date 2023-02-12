import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  inValid = false;
  student: FormGroup;
  id: any;
  constructor(form: FormBuilder, private http: HttpClient,private router: Router) {
    this.id = null;
    this.student = form.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ],
      ],
      dob: ['', Validators.required],
      gender: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  async post() {
    if (this.student.valid) {
      this.inValid = false;
      await this.http
        .post('http://localhost:4000/post', this.student.value)
        .subscribe((response) => {
          this.id = response
          this.router.navigate(['/viewpage',this.id]);
        });
      this.student.reset();
    } else {
      this.inValid = true;
    }
  }
}
