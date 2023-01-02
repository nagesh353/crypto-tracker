import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide =true;
  nagesh = new FormGroup({

  })

  constructor() { }

  ngOnInit(): void {
  }

}
