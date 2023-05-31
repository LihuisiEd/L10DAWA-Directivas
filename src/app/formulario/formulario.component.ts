import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;
  nombre: string = '';
  email: string = '';

  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.formulario.value.nombre}`);
    console.log(`Email: ${this.formulario.value.email}`);
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  abrirConfirmacion(){
    const confirmacion = window.confirm('¿Seguro de que quieres enviar el formulario?')
    if (confirmacion){
      //this.onSubmit();
      const nombre = this.formulario.value.nombre;
      const email = this.formulario.value.email;
      this.router.navigate(['/respuesta', nombre, email]);
      console.log('Se envió todo')
    } else {
      console.log('Se canceló')
    }
  }

}
