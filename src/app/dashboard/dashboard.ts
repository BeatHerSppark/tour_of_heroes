import { Component, inject, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
    service = inject(HeroesService);
    router = inject(Router);

    heroes: Hero[] = [];

    ngOnInit(): void {
        this.heroes = this.service.getTopHeroes(4);
    }

    // programabilno najchesto posle formi za redirect
    // onItemClick(hero: Hero) {
    //     this.router.navigate(['/hero-detail', hero.id]);
    // }
}
