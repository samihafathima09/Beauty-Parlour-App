import { Component, OnInit } from '@angular/core';
import {Services} from '../../models/services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
   services: Services[] = [];

  ngOnInit(): void {
    this.services = [ new Services('01', 'Facial', 'Gold Facial', 'facial.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
      new Services('01', 'Threading', 'Stylish threading', 'threading.jpg', 'beautiful design')];
  }

}
