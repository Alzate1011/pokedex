import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokemonService } from './../../shared/shared';
import { PokemonPage } from './../../pages/pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pokemons = [];
  constructor(public navCtrl: NavController, private _pokemonservice: PokemonService) { }

  ionViewDidLoad() {
    this._pokemonservice.getPokemonDetails().subscribe(data => {
      this.pokemons = data;
      console.log(data);
    });
  }

  itemTapped($event, pokemon) {
    this.navCtrl.push(PokemonPage, pokemon);
  }
}
