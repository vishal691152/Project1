import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealTimeProject';
}
