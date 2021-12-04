import { Component, OnInit } from '@angular/core';
import { Wiki } from "../models/wiki.interface";
import { WikiService } from "../services/wiki.service";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  wiki: Wiki;
  idWiki = "1";

  constructor(private wikiService : WikiService) { }

  ngOnInit(): void {
    this.loadWiki();
  }

  loadWiki(): void {
    this.wikiService.getWikiById(this.idWiki).subscribe((data) => {
      this.wiki = data;
    });
  }

}
