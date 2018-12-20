import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cal-overview',
  templateUrl: './cal-overview.component.html',
  styleUrls: ['./cal-overview.component.css']
})
export class CalOverviewComponent implements OnInit {

  events: any[];

  constructor() {
  }

  ngOnInit() {
    this.events = [
      {
        "title": "Bundesnachrichtendienst Führung",
        "date": "01.10.2018",
        "month" : "Oktober",
        "group" : 9,
        "occupation" : 20,
        "imageurl" : "https://upload.wikimedia.org/wikipedia/commons/b/b6/BND_Logo_2010.png",
        "description" : "Der Bundesnachrichtendienst mit Sitz in Berlin und Pullach im Isartal ist neben dem Bundesamt für Verfassungsschutz und dem Bundesamt für den Militärischen Abschirmdienst einer der drei deutschen Nachrichtendienste des Bundes und als einziger deutscher Nachrichtendienst zuständig für die Auslandsaufklärung",
        "button" : "Teilnehmen"

      },
      {
        "title": "Lauftreffen Gruppe 2",
        "date": "10.10.2018",
        "month" : "Oktober",
        "group" : 2,
        "occupation" : 80,
        "imageurl" : "https://www.teasire.de/wp-content/uploads/2016/09/spreeufer_lauf_345287399_550.jpg",
        "description" : "„Ein ganz einfaches Konzept: Ohne Anmeldung, ohne Vereinsmitgliedschaft und kostenlos kann man jederzeit bei den ein- bis zweimal wöchentlichen Lauf-Treffs mitmachen. Neulinge und Anfänger werden von Lauf-Treff-Leitern besonders eingewiesen. Die unterschiedlichen Laufgruppen absolvieren dann, je nach Leistungsniveau der Teilnehmer ein unterschiedliches Programm. Einzige Pflicht: Jeder, auch der Anfänger ist eine Stunde unterwegs – ob in einer langsamen oder schnellen Gruppe, mit oder ohne Gehpausen.“[1]",
        "button" : "Teilnehmen"

      },
    ];

  }

}
