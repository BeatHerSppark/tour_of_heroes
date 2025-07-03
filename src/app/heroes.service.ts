import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { delay, map, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class HeroesService {

    getHeroes(): Observable<Hero[]> {
        return of(HEROES).pipe(
            delay(1500)
        );
    }

    getHeroById(id: number): Observable<Hero | undefined> {
        return this.getHeroes().pipe(
            map(result => result.find(it => it.id === id))
        );
    }

    getTopHeroes(n: number): Observable<Hero[]> {
        return this.getHeroes().pipe(
            map(result => result.slice(0, n))
        );
    }
}
