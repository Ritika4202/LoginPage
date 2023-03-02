import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
