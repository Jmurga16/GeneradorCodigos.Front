import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CodigosService } from 'src/app/services/codigos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generacion',
  templateUrl: './generacion.component.html',
  styleUrls: ['./generacion.component.css']
})
export class GeneracionComponent implements OnInit {

  fNombre = new FormControl();
  fEmail = new FormControl();

  constructor(
    private codigosService: CodigosService
  ) {

  }

  ngOnInit(): void {

  }

  //#region Generar Codigos
  fnGenerar() {
    let pParametro: any = [];
    pParametro.push(this.fNombre.value);
    pParametro.push(this.fEmail.value);

    this.codigosService.fnPostCodigos('02', pParametro).subscribe(
      data => {

        console.log(data);
        if (data.cod == 1) {
          Swal.fire(
            'Codigo Generado!',
            `El Código ${data.mensaje} ha sido generado`,
            'success'
          )
        }
        else if (data.cod == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.mensaje,            
          })
        }


      });
  }
  //#endregion 

}
