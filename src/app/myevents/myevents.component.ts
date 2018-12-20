import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {

  events: any[];

  constructor() {
  }

  ngOnInit() {
    this.events = [
      {
        "title": "Lauftreffen Gruppe 2",
        "date": "10.10.2018",
        "month": "Oktober",
        "group": 2,
        "occupation": 80,
        "imageurl": "https://www.teasire.de/wp-content/uploads/2016/09/spreeufer_lauf_345287399_550.jpg",
        "description": "„Ein ganz einfaches Konzept: Ohne Anmeldung, ohne Vereinsmitgliedschaft und kostenlos kann man jederzeit bei den ein- bis zweimal wöchentlichen Lauf-Treffs mitmachen. Neulinge und Anfänger werden von Lauf-Treff-Leitern besonders eingewiesen. Die unterschiedlichen Laufgruppen absolvieren dann, je nach Leistungsniveau der Teilnehmer ein unterschiedliches Programm. Einzige Pflicht: Jeder, auch der Anfänger ist eine Stunde unterwegs – ob in einer langsamen oder schnellen Gruppe, mit oder ohne Gehpausen.“[1]",
        "button" : "Absagen"
      },
    ];


  }

}
