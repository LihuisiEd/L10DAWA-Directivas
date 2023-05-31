import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  nombre: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.route.snapshot.params['nombre'];
    this.email = this.route.snapshot.params['email'];
  }
}
