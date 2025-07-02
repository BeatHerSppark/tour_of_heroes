import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Heroes } from './heroes/heroes';
import { HeroDetail } from './hero-detail/hero-detail';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  service: HeroesService = inject(HeroesService);
  hero: Hero | undefined;

  onSelectedHero(hero: Hero) {
    this.hero = hero;
  }
}
