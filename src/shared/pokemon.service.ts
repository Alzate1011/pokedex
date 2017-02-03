import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {
    private _baseUrl: string = 'http://pokeapi.co/api/v2/pokemon/?limit=5&offset=0';

    constructor(private _http: Http) { }

    getPokemonsO(): Observable<any> {
        return this._http.get(this._baseUrl)
            .map((response: Response) => {
                return response.json();
            });
    }

    getPokemonDetails(): Observable<any> {
        return this._http.get(this._baseUrl)
            .map((response: Response) => {
                return response.json().results;
            })
            .flatMap((pokemons) => {
                return Observable.forkJoin(
                    pokemons.map(
                        p => this._http.get(p.url).map((res: Response) => {
                            return res.json();
                        })
                    ));
            });
    }

    getAbilities(abilities: [any]): Observable<any> {
         return Observable.forkJoin(
                    abilities.map(
                        p => this._http.get(p.ability.url).map((res: Response) => {
                            return res.json();
                        })
                    ));
    }

    getDetails(url): Observable<any> {
        return this._http.get(url)
            .map((response: Response) => {
                return response.json();
            });
    }
}
