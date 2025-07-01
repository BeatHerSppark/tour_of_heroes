import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
  imports: [],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail {
    @Input() hero: Hero | undefined;
}
