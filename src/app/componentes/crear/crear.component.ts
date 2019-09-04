import { Component, OnInit } from '@angular/core';
import { LibrosInterface } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public libro: LibrosInterface;

  constructor(private librosServicios: LibrosService) { }

  ngOnInit() {
  }

  public getLibro(id: number){
    
  }

}
