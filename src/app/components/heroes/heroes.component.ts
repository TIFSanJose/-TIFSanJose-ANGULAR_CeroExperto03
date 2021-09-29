import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Herores } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
  
  public heroes : Herores[] = []

  constructor(  private _heroesService: HeroesService, 
                private _router: Router               ) { 
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes()
  }

  verHeroe(idx: number){
    this._router.navigate(['heroe', idx]);
  }

}
