import { analyzeAndValidateNgModules, DeclareFunctionStmt, FunctionExpr } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {


  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService ){

  }

  search() {

    const valor = this.txtBuscar.nativeElement.value;
    
    if(valor.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = "";
    
  }

}


/* ---------------------------- Notas Academicas ---------------------------- */
 
// @ViewChild sería como usar un document.querySelector
// Dentro de los paréntesis puede buscar entre comillas por etiqueta, clase,
// referencia local(nótese que la ref local va sin el "#"), etc.

// <HTMLInputElement>  => estoy indicando el tipo del ElementRef ya que por defecto
//  es any y eso hace que el intelicense no funcione.

//  Non-null assertion operator 
//  podemos indicar que el elemento que señalamos con el signo "!", existe.
