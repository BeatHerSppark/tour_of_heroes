import { JsonPipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
    heroes: Hero[] = HEROES;

    //hero: Hero | undefined = undefined;
    @Output() selectedHero = new EventEmitter<Hero>();
    @Input() selected: Hero | undefined;

    onHeroClicked(hero: Hero) {
        console.log(`Clicked hero ${hero.name}`);
        //this.hero = hero;
        this.selectedHero.emit({...hero});
    }
}

