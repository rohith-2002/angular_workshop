import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[],SearchText:string): any {
      if(!items) return [];
      if(!SearchText) return items;
      return items.filter((item:any)=>{return item.Name.toLowerCase().includes(SearchText.toLowerCase())||
        item.Email.toLowerCase().includes(SearchText.toLowerCase())||
        item.city.toLowerCase().includes(SearchText.toLowerCase())||
        item.state.toLowerCase().includes(SearchText.toLowerCase())||
        item.pin.toLowerCase().includes(SearchText.toLowerCase())
      });
  }

}
