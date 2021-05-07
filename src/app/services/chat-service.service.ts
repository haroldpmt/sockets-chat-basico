import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(public wsService: WebsocketService) { }

  sendMessage(mensaje: string){

    const payload = { 
      de: 'Harold',
      cuerpo: mensaje
    }

    this.wsService.emit('mensaje', payload);
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');
  }


}
