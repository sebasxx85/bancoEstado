import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-on-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-board.component.html',
  styleUrl: './on-board.component.scss'
})
export class OnBoardComponent {

  mostrarDialogo: boolean = false;
  
  setDialogo(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    this.mostrarDialogo = !this.mostrarDialogo;
  }

}
