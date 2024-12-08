import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material/material/material.module';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mensaje: string = '';
  constructor(private router: Router) {}

  onLogin() {
    const usuario = (document.querySelector('input[name="usuario"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value;

    if (usuario && password) {
      sessionStorage.setItem('token', 'example-token');
      sessionStorage.setItem('user', usuario);
      this.router.navigate(['/profile']);
      this.mensaje = 'Ingreso exitoso';
    } else {
      this.mensaje = 'Por favor ingrese usuario y/o contraseña correctos';
    }
  }
}
