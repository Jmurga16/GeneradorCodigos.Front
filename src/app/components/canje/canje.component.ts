import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CodigosService } from 'src/app/services/codigos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-canje',
  templateUrl: './canje.component.html',
  styleUrls: ['./canje.component.css']
})
export class CanjeComponent implements OnInit {

  fCodigo = new FormControl();

  constructor(
    private codigosService: CodigosService) { }

  ngOnInit(): void {
  }

  //#region Canjear Codigos
  fnCanjear() {
    let pParametro: any = [];
    pParametro.push(this.fCodigo.value);

    this.codigosService.fnPostCodigos('03', pParametro).subscribe(
      data => {

        console.log(data);
        
        if (data.cod == 1) {
          Swal.fire(
            'Codigo Canjeado!',
            `${data.mensaje}`,
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
