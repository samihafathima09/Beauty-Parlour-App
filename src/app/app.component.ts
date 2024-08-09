import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beauty-parlour-app';
  constructor(private http: HttpClient) {}

  private baseUrl:string = 'http://localhost:8080';
  private appointmentUrl:string = this.baseUrl + '/appointment';
}
