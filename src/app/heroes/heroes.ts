import { JsonPipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroesService } from '../heroes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'heroes',
  imports: [RouterLink],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes implements OnInit {
    heroes: Hero[] = [];

    //hero: Hero | undefined = undefined;
    @Output() selectedHero = new EventEmitter<Hero>();
    @Input() selected: Hero | undefined;

    constructor(private service: HeroesService) {
        console.log(service);
    }

    onHeroClicked(hero: Hero) {
        console.log(`Clicked hero ${hero.name}`);
        //this.hero = hero;
        this.selectedHero.emit({...hero});
    }

    ngOnInit(): void {
        this.heroes = this.service.getHeroes();
    }
}

