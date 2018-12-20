import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Message, MessageService} from 'primeng/api';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event : any;
  msgs: Message[] = [];

  constructor(private messageService: MessageService) {}


  ngOnInit() {

  }

  takepart(event:any) {
    this.messageService.add({severity:'success', summary:'Teilgenommen', detail:'Du nimmst an ' + event.title + ' teil'});
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger
    // changes.prop contains the old and the new value...
  }

}
