import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/clases/Marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MapaEditarComponent } from '../mapa-editar/mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  marcadores: Marcador[] = [];

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {

    const marcador: Marcador = new Marcador(this.lat, this.lng);
    this.marcadores.push(marcador);
    this.recuperarMarcadores();
  }

  agregarMarcador($event) {

    const coords: { lat: number, lng: number } = $event.coords;

    const marcador: Marcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(marcador);


    this.guardarMarcadores();
    this.mostrarMensaje('Marcador Agregado', 'cerrar')
  }

  eliminar(i) {

    this.marcadores.splice(i, 1);
    this.guardarMarcadores();
    this.mostrarMensaje('Marcador Eliminado', 'cerrar')
  }

  editar(marcador: Marcador) {

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {
        titulo: marcador.titulo,
        descripcion: marcador.descripcion
      }
    });

    dialogRef.afterClosed()
    .subscribe((result:{titulo:string,descripcion:string}) => {

        if(!result) return;
        marcador.titulo = result.titulo
        marcador.descripcion = result.descripcion

        this.guardarMarcadores(); 
        this.mostrarMensaje('Marcador actualizado','Cerrar');
    });

  }

 

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  recuperarMarcadores() {

    if (!localStorage.getItem('marcadores')) return;
    this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
  }

  mostrarMensaje(description: string, action: string) {
    let snackBarRef = this.snackBar.open(description, action, { duration: 2000 });
  }

}
