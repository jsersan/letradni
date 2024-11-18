import { Component } from '@angular/core';

@Component({
  selector: 'app-dni-calculator',
  templateUrl: './dni-calculator.component.html',
  styles: [
  ]
})
export class DniCalculatorComponent {
dni: any;
letra: any;

  calcular(): void {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniNum = parseInt(this.dni, 10);
    this.letra = letras.charAt(dniNum % 23);

    console.log(this.letra);

    this.dni+=this.letra;
  }
  

}
