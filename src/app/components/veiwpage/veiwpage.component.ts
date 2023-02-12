import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiwpage',
  templateUrl: './veiwpage.component.html',
  styleUrls: ['./veiwpage.component.scss'],
})
export class VeiwpageComponent {
  id: any;
  studentDetails:any;

  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {
    this.studentDetails = null;
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.http
      .get(`http://localhost:4000/get/${this.id}`)
      .subscribe((response) => {
        this.studentDetails = response
      });
  }
  edit(){
    this.router.navigate(['/editpage',this.id]);
  }
  delete(){
    this.http
    .delete(`http://localhost:4000/delete/${this.id}`)
    .subscribe((response) => {
      if(response){
        alert('Your Details was Deleted')
        this.router.navigate(['']);
      }
    });
  }
}
