import { Component, inject, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard{
    service = inject(HeroesService);
    router = inject(Router);

    heroes$ = this.service.getTopHeroes(4);

    // ngOnInit(): void {
    //     this.service.getTopHeroes(4).subscribe(data => this.heroes = data);
    // }

    // programabilno najchesto posle formi za redirect
    // onItemClick(hero: Hero) {
    //     this.router.navigate(['/hero-detail', hero.id]);
    // }
}
