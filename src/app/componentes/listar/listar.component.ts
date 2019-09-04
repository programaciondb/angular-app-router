import { Component, OnInit } from '@angular/core';
import { LibrosInterface } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public libros: LibrosInterface;
  constructor(private librosServicios: LibrosService) { }

  ngOnInit() {
    this.getLibros();
  }

  public getLibros() {
    this.librosServicios.getLibros()
      .subscribe((libros: LibrosInterface) => (this.libros = libros));
  }

}
