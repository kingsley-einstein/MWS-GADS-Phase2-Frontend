import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Favorite, ResponseWithData } from '../models';
import { environment } from '../environments/environment';

@Injectable()
export class HttpService {
  constructor(private client: HttpClient) {}
  
  createUser(user: User) : Observable<ResponseWithData> {
    return this.client.post<ResponseWithData>(`${environment.server_url}/auth/register`, user);
  }

  logUserIn(user: User) : Observable<ResponseWithData> {
    return this.client.post<ResponseWithData>(`${environment.server_url}/auth/login`, user);
  }

  updateUser(user: User) : Observable<ResponseWithData> {
    return this.client.patch<ResponseWithData>(`${environment.server_url}/auth/update`, user);
  }

  logUserOut() : Observable<ResponseWithData> {
    return this.client.post<ResponseWithData>(`${environment.server_url}/auth/logout`, {});
  }

  getLoggedUser() : Observable<ResponseWithData> {
    return this.client.get<ResponseWithData>(`${environment.server_url}/auth`);
  }

  addToFavorite(favorite: Favorite) : Observable<ResponseWithData> {
    return this.client.post<ResponseWithData>(`${environment.server_url}/favorite`, favorite);
  }

  getFavorites() : Observable<ResponseWithData> {
    return this.client.get<ResponseWithData>(`${environment.server_url}/favorite`);
  }

  removeFromFavorites(favorite: Favorite) : Observable<ResponseWithData> {
    return this.client.delete<ResponseWithData>(`${environment.server_url}/favorite/${favorite.id}`);
  }

  deleteAllFavorites() : Observable<ResponseWithData> {
    return this.client.delete<ResponseWithData>(`${environment.server_url}/favorites`);
  } 
}
