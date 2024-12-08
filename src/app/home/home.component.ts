import { Component } from '@angular/core';
import { MaterialModule } from '../material/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  goLogin() {
    this.router.navigate(['/login']);
  }
  goProfile() {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
