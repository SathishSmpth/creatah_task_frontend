import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss'],
})
export class EditpageComponent {
  id: any;
  studentDetails: any;
  inValid = false;
  updatedDetails: FormGroup;
  constructor(
    form: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.studentDetails = null;
    this.id = this.route.snapshot.paramMap.get('id');
    this.updatedDetails = form.group({
      name: [
        this.studentDetails?.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ],
      ],
      dob: [this.studentDetails?.dob, Validators.required],
      gender: [this.studentDetails?.gender, [Validators.required]],
      phone: [this.studentDetails?.phone, [Validators.required]],
      email: [
        this.studentDetails?.email,
        [Validators.required, Validators.email],
      ],
    });
  }

  ngOnInit() {
    this.http
      .get(`http://localhost:4000/get/${this.id}`)
      .subscribe((response) => {
        this.studentDetails = response;
      });
  }

  update(){
    if (this.updatedDetails.valid) {
      this.inValid = false;
      this.http
        .put(`http://localhost:4000/put/${this.id}`, this.updatedDetails.value)
        .subscribe((response) => {
          if(response){
            alert('Your Details was Updated')
            this.router.navigate(['']);
          }
        });
      this.updatedDetails.reset();
    } else {
      this.inValid = true;
    }

  }

}

