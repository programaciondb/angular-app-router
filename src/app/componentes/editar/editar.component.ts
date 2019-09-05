import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LibrosInterface } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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
      libroObtenido => this.libro = libroObtenido
    );
  }

  public putLibro(id: number) {
    var libroObservable = this.librosServicios.putLibro(id, this.libro);
    libroObservable.subscribe(
      libroObtenido => {
        this.libro = libroObtenido;
        this.router.navigate(["/listar"])
      });
  }

}
