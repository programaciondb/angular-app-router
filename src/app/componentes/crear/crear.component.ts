import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosInterface, LibroClase } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public libro: LibrosInterface;
  nuevoLibro = new LibroClase();
  constructor(
    private librosServicios: LibrosService,
    private router: Router) { }

  ngOnInit() {
    this.getLibro(0);
  }

  public getLibro(id: number) {
    var libroObservable = this.librosServicios.getLibro(id);
    libroObservable.subscribe(
      libroObtenido => this.nuevoLibro = libroObtenido
    );
  }

  public postLibro() {
    var libroObservable = this.librosServicios.postLibro(this.nuevoLibro);
    libroObservable.subscribe(
      libroObtenido => {
        this.libro = libroObtenido;
        this.router.navigate(["/listar"]);
      });
  }

}
