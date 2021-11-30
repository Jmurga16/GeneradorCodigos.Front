import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CodigosService } from 'src/app/services/codigos.service';
import { Codigo } from '../models/ICodigo';


@Component({
  selector: 'app-codigos-list',
  templateUrl: './codigos-list.component.html',
  styleUrls: ['./codigos-list.component.css']
})
export class CodigosListComponent implements OnInit {

  appName: string = 'Códigos';

  listProductos: Codigo[] = []

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'nIdRegistro',
    'sNombre',
    'sEmail',
    'sCodigo',
    'sEstado'
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private codigosService: CodigosService
  ) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.fnListarCodigos();
  }

  //#region Filtrado de Codigos
  applyFilter(event: Event) {
    //Leer el filtro
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    //Si hay paginacion
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //#endregion

  //#region Listar Codigos
  fnListarCodigos() {
    let pParametro: any = [];
    this.codigosService.fnListCodigos('01', pParametro).subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  //#endregion 


}
