import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  title = 'bancoEstado';

  constructor(private router: Router) { }


  ingresar() {
    this.router.navigate(['/on-board']);
  }

}
