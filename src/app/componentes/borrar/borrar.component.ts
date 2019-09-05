import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, RouterModule } from '@angular/router';
import { LibrosInterface } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  public libro: LibrosInterface;
  constructor(
    private librosServicios: LibrosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.getLibro(id);
  }

  public getLibro(id: number) {
    var libroObservable = this.librosServicios.getLibro(id);
    libroObservable.subscribe(
      libroObtenido => {
        this.libro = libroObtenido;
      });
  }

  public deleteLibro(id: number) {
    var estado = this.librosServicios.deleteLibro(id);
    estado.subscribe(
      estado => {
        this.router.navigate(["/listar"])
      });
  }



}
