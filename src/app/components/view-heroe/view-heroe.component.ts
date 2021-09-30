import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-view-heroe',
  templateUrl: './view-heroe.component.html',
  styles: [
  ]
})
export class ViewHeroeComponent implements OnInit {

  public heroe: any[] = [];
  public termino: string = '';
  constructor(  private _activateRoute: ActivatedRoute, 
                private _heroeService : HeroesService  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe( params => {
      
      this.termino = params['termino'];
      
      this.heroe = this._heroeService.buscarHeroe(params['termino']);


    })

    
  }

}
