import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../room/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RoomListComponent implements OnInit {
  @Input() room: RoomList[] = [];

  @Output() roomSelected = new EventEmitter<RoomList>();


  constructor() {}

  ngOnInit(): void {
      
  }

  roomSelect(room: RoomList){
    this.roomSelected.emit(room);
  }

}
