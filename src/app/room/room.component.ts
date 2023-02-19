import { Component, OnInit } from '@angular/core';
import {Room, RoomList} from './room'
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  hotelName = 'R0yal Zhisus';
  numberOfRooms = 10;
  hideRooms = false;
  roomSelected!: RoomList;

  room : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 4,
  };
// roomList: RoomList[] = [ {
//   roomType: "Deluxe",
//   amenities: 'AD, bathub, TV',
//   price: 1000,
//   photos: 2,
//   checkInTime: new Date('19-Feb-2023'),
//   checkOutTime: new Date('20-Feb-2023'),
// },
// {
//   roomType: "Suite",
//   amenities: 'AD,bathub',
//   price: 800,
//   photos: 1,
//   checkInTime: new Date('19-Feb-2023'),
//   checkOutTime: new Date('20-Feb-2023'),
// },];

roomList: RoomList[] = [];
  constructor() {}
  ngOnInit(): void {
    this.roomList = [
      {
        roomType: "Deluxe",
        amenities: 'AD, bathub, TV',
        price: 1000,
        photos: 2,
        checkInTime: new Date('19-Feb-2023'),
        checkOutTime: new Date('20-Feb-2023'),
      },
      {
        roomType: "Suite",
        amenities: 'AD,bathub',
        price: 800,
        photos: 1,
        checkInTime: new Date('19-Feb-2023'),
        checkOutTime: new Date('20-Feb-2023'),
      },
    ]
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  roomSelect(room: RoomList) {
    this.roomSelected = room;
  }
}
