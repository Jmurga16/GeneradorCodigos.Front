import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  mobileQuery: MediaQueryList;

  @Output() salida: EventEmitter<any> = new EventEmitter();

  isExpanded = true;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;
  isShowing = false;

  listaNav = [
    { id: 1, name: 'Generacion', route: 'generacion', icon: 'build', subMenu: 0, mostrar: false },
    { id: 2, name: 'Canje', route: 'canje', icon: 'verified', subMenu: 0, mostrar: false },
    { id: 3, name: 'Codigos', route: 'codigos', icon: 'preview', subMenu: 0, mostrar: false },
    
  ];

  listaSubNav = [
    { idHijo: 1, idPadre: 2, name: '', route: '', icon: '' },    
  ];


  listaNavegacion = [
    { name: 'Usuarios', route: 'usuarios', icon: 'manage_accounts' },
    { name: 'Almacenes', route: 'almacenes', icon: 'store' },
    { name: 'Zonas', route: 'zonas', icon: 'room' },
  ];

  private _mobileQueryListener: () => void;

  
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  fnRuteo(ruta: string) {

    let sRuta = `/${ruta}`

    //this.router.navigate(['/', 'usuarios']);

    this.router.navigateByUrl(sRuta);

  }

  fnMostrar(index: number) {

    let bEstado: boolean;

    if (this.listaNav[index].mostrar) {
      bEstado = false;
    }
    else {
      bEstado = true;
    }

    this.listaNav[index].mostrar = bEstado

  }
}
