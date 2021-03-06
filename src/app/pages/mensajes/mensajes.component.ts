import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {


  constructor(public wsService:WebsocketService) { }

  ngOnInit(): void {
  }

  salir(){
    this.wsService.logoutWS();
  }
}
