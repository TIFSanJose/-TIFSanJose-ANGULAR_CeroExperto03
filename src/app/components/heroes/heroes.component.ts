import { Component, OnInit } from '@angular/core';
import { HeroesService, Herores } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
  
  public heroes : Herores[] = []

  constructor(private _heroesService: HeroesService) { 
    console.log('soy constructor');
    
  }

  ngOnInit(): void {
    
    this.heroes = this._heroesService.getHeroes()
    
    console.log(this.heroes);
  }

}
