import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokemonService } from './../../shared/shared';

@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html'
})
export class PokemonPage {
  pokemon: any;
  abilities: [any];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _pokemonservice: PokemonService) {
    this.pokemon = this.navParams.data;
    console.log(this.pokemon);
  }

  ionViewDidLoad() {
    this._pokemonservice.getAbilities(this.pokemon.abilities).subscribe(data => {
      this.abilities = data;
      console.log(data);
    });
  }
}
