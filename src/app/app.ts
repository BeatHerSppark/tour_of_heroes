import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heroes } from './heroes/heroes';
import { HeroDetail } from './hero-detail/hero-detail';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  imports: [Heroes, HeroDetail],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  hero: Hero | undefined;

  onSelectedHero(hero: Hero) {
    this.hero = hero;
  }
}
