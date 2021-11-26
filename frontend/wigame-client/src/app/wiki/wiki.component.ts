import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  id: number | undefined;
  name: string | undefined;
  categorie: string | undefined;
  createur: string | undefined;
  //lstFiche: FicheComponent[];

  constructor(id: number, name: string, categorie: string, createur: string) {

  }

  ngOnInit(): void {
  }

}
