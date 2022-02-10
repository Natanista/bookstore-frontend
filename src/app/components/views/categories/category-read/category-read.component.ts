import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = []


  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'books', 'action'];

  findAll(){
    this.service.findAll().subscribe(response => {
      console.log(response);
      this.categories = response;
    }
      
      )
}

navigateToCategoryCreate(){
  this.router.navigate(["categories/create"])

}

delete(id: String): void{
  this.service.delete(id);
  this.router.navigate(["categories"])

}

}
