import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <div class="navbar">
    <h5>Buscar</h5>
    <input type="text" name="search" id="search" class="form-control"    placeholder="Buscar gifs...." (keyup.enter)="searchTag()" #txtTagInpunt>
    </div>`,
    styleUrls:['./search-box.component.css']

})
export class SearchBoxComponent {
  @ViewChild('txtTagInpunt')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this,this.tagInput.nativeElement.value = '';

    console.log(newTag);

  }
}
