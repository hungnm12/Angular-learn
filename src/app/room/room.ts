export interface Room {
    totalRooms: number
    availableRooms: number;
    bookedRooms: number;

}

export interface RoomList {
    roomType: String;
    amenities: String;
    price: number;
    photos: number;
    checkInTime: Date;
    checkOutTime: Date;
}