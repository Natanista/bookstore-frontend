import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from "./../../../../environments/environment";
import { Category } from "./category.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Category[]> {
    const url = `${this.baseUrl}/bookstore/categories`;
    return this.http.get<Category[]>(url);
  }

  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/bookstore/categories`;
    return this.http.post<Category>(url, category)
  }

  validateMessage(str: String){
    this._snack.open(`${str}`, 'OK', 
    {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  delete(id: String){
    const url = `${this.baseUrl}/bookstore/categories/${id}`;
    return this.http.delete(url);
  }


}
