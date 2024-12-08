import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material/material/material.module';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username = '';
  constructor(private router: Router) {}

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    } else {
      this.username = sessionStorage.getItem('user') || 'Usuario';
    }
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}

