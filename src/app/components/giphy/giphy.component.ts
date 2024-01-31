// giphy.component.ts

import { Component } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent {
  categories: any = [];
  searchTerm = '';

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.giphyService.getCategory().subscribe((response: any) => {
      this.categories = response;
    });
  }

  searchGifs() {
    if (this.searchTerm.trim() !== '') {
      this.giphyService.searchGifs(this.searchTerm).subscribe((response: any) => {
        this.categories = response;
      });
    } else {

      this.loadCategories();
    }
  }
}
