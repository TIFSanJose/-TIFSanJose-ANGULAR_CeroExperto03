import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(  private _heroeService: HeroesService, 
                private _router      : Router ) { }

  ngOnInit(): void {
  }

  buscarHeore = (termino: string) => {
    //console.log(termino);
    
    //console.log(this._heroeService.buscarHeroe(termino));
    
    this._router.navigate(['verheroe', termino]);
    
  }

}
