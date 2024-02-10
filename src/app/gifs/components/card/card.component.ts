import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements  OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {

    if(!this.gif)throw new Error('Git property is required');
  }

}
