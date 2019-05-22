import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor() {
    this.title = 'Francisco Castañeda';
    this.subtitle = 'Desarrollador web Trainee';
    this.web = 'https://github.com/ingfrancisco1988/';
  }

  ngOnInit() {
  }

}
