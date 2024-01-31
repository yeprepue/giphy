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

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.giphyService.getCategories().subscribe((response: any) => {
      this.categories = response;
      console.log(response);
    });
  }

  searchGifs() {
    const resultados = this.categories.filter((category: any) => {
      const tituloGif = category.gif.title.toLowerCase();
      return tituloGif.includes(this.searchTerm.trim().toLowerCase());
    });
    this.categories = resultados;

    if (this.searchTerm.trim() == "") {
      this.loadCategories();
    }
  }
}
