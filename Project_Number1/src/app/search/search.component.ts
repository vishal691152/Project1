import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Search } from '../Search';
import { SEARCH } from '../Search-Stock';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	private CurrentSearchValue : Search;
  private pastSearchValue : Search[] = []
  constructor(private searchservice: SearchService) { }

  ngOnInit() {
  }
  getClick(SearchElement : string): void {
  	this.CurrentSearchValue = this.searchservice.getClick(SearchElement);
    //storing Search Results
    this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
    this.pastSearchValue.push(this.CurrentSearchValue);
  }

}
