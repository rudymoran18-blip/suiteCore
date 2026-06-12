import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../env/environment.prod';

@Injectable({providedIn: 'root'})
export class HabitacioneService {

  private apiUrl = `${environment.apiUrl}/habitaciones`

  constructor(private http:HttpClient) { }


  getHabitaciones():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  getHabitacionesById(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)

  }
  createHabitacion(habitacion: any): Observable<any> {
    return this.http.post(this.apiUrl, habitacion);
  }

  updateHabitacion(id: number, habitacion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, habitacion);
  }

  deleteHabitacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }




}
