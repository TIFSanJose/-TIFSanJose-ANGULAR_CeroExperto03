import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  public heroe: any;

  constructor(  private _activatedRoute : ActivatedRoute,
                private _router         : Router,
                private _heroesService  : HeroesService  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      
      console.log(this.heroe);
      
    })
  }

  regresarHeroe = () =>{
    this._router.navigate(['heroes']);
  }

}
