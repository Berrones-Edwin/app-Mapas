import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder:FormBuilder
  ) {

    console.log(data);

    this.forma = this.formBuilder.group({
      'titulo':data.titulo,
      'descripcion': data.descripcion
    })
    
   }

  ngOnInit() {
  }

  guardarCambios(){
    
    this.dialogRef.close(this.forma.value);
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
