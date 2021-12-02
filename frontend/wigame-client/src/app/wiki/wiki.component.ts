import { Component, OnInit } from '@angular/core';
import {Wiki} from "../models/wiki.interface";
import {WikiService} from "../services/wiki.service";

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
    console.log("hello");
    this.loadWiki();
  }

  loadWiki(): void {
    console.log("oui");
    this.wikiService.getWikiById(this.idWiki).subscribe((data) => {
      console.log("ptet");
      console.log(data);
      this.wiki = data;
    });
  }

}
