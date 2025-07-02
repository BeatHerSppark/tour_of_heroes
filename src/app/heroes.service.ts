import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
    providedIn: 'root',
})
export class HeroesService {
    getTopHeroes(n: number): Hero[] {
        return this.getHeroes().slice(0, n);
    }

    getHeroes(): Hero[] {
        return HEROES;
    }

    getHeroById(id: number): Hero | undefined {
        return this.getHeroes().find(hero => hero.id === id);
    }
}
