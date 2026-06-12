import { Hotel } from "./hotel.interface";

export interface Habitacion{
  id: number,
  hotelId: number,
  numero: number,
  tipo:string,
  precioNoche:number,
  capacidad:number,
  estado: string,
  hotel: Hotel
}


export interface habitacionRes {
  hotelId: number,
  numero: number,
  tipo: string,
  precioNoche: number,
  capacidad: number,
  estado: string,
}
