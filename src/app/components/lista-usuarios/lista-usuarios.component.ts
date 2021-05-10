import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styles: [
  ]
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.usuariosActivosObs = this.chatService.getUsuariosActivos();

    // this.chatService.pedirListaUsuarios().subscribe( resp => {
    //   console.log(resp);
    // })
    this.chatService.emitirUsuariosActivos();

  }

}
