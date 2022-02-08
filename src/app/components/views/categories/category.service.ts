import { environment } from './../../../../environments/environment';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]>{
    const url = `${this.baseUrl}/bookstore/categories`
    return this.http.get<Category[]>(url)
  }
}
