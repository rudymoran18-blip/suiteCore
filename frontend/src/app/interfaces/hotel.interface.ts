export interface Hotel {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
  estado: string;

}


export interface HotelResponse {
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
  estado: string;
}
