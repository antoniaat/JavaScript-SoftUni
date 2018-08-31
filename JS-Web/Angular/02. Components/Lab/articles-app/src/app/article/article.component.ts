import { Component, Input } from '@angular/core';
import { Article} from "../models/article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

// export class ArticleComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }

export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show image";
}