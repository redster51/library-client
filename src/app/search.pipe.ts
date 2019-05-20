import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(cards, inputStr) {
    return cards && cards.filter(card => card.title.includes(inputStr.toUpperCase()));
  }
}

