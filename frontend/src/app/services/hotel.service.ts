import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hotel } from '../interfaces/hotel.interface';
import { environment } from '../env/environment.prod';

@Injectable({providedIn: 'root'})
export class HotelService {
  private urlApi = `${environment.apiUrl}/hoteles`;

  constructor(private http: HttpClient) { }


 getHoteles(): Observable<{ hoteles: Hotel[] }> {
  return this.http.get<{ hoteles: Hotel[] }>(this.urlApi);
}

  getHotelById(id: number): Observable<any> {
    return this.http.get(`${this.urlApi}/${id}`);
  }

  createHotel(hotel: any): Observable<any> {
    return this.http.post(this.urlApi, hotel);
  }

  updateHotel(id: number, hotel: any): Observable<any> {
    return this.http.put(`${this.urlApi}/${id}`, hotel);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/${id}`);
  }



}
