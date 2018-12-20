import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Übersicht', icon: 'pi pi-fw pi-plus', routerLink: "/" },
      {label: 'Neuer Termin', icon: 'pi pi-fw pi-plus',  routerLink: "/newevent"},
      {label: 'Meine Termine', icon: 'pi pi-fw pi-download', routerLink:"/myevents"},
      {label: 'Impressum', icon: 'pi pi-fw pi-refresh'}
    ];
  }


}
