import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '../pipe/title-case.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLink, TitleCasePipe],
  standalone: true
})
export class AppComponent {
  title = 'biblio_tech';
}