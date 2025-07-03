import { Component, inject, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs';

@Component({
  selector: 'hero-detail',
  imports: [RouterLink],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail implements OnInit {
    service: HeroesService = inject(HeroesService);

    activatedRoute = inject(ActivatedRoute);
    hero: Hero | undefined;
    id: string | null = null;

    ngOnInit(): void {
        // const id = this.activatedRoute.snapshot.paramMap.get('id');
        // if(id) {
        //     this.hero = this.service.getHeroById(+id);
        // }

        this.activatedRoute.paramMap.pipe(
            map(paramMap => paramMap.get('id')),
            filter(id => id != null),
            // flatMap aka go vadi genericot od Observable i se koristi direktno vo subscribe
            mergeMap(id => this.service.getHeroById(+id).pipe(
                map(hero => ({id, hero}))
            ))
        ).subscribe(({id, hero}) => {
            this.hero = hero;
            this.id = id;
        });
    }
}
