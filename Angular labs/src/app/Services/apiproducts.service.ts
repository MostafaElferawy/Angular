import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/Inetrfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class APIProductsService {

  httpOption;
  constructor(private httpClient:HttpClient) { 
      
      this.httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': "sfkugkrbf"
        })
      }

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  //  get post put delete --> Observable
  // getCats(page: number): Observable<any[]> {
  //   return this.httpClient.get(
  //     `https://api.thecatapi.com/v1/breeds?page=${page}&limit=5`
  //   ) as Observable<any[]>;
  // }

  
  getAllProducts() : Observable<IProduct[]>{
      return this.httpClient.get<IProduct[]>(`${environment.APIURL}`)
  }


  getProductsByCat(catID: number):  Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}?categoryID=${catID}`)
  }

  addProducts(newPrd: IProduct):  Observable<IProduct>{
      return this.httpClient.post<IProduct>(`${environment.APIURL}`, JSON.stringify(newPrd), this.httpOption).pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPagination(page: number):  Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}?_page=${page}&_limit=2`)
  }


}
