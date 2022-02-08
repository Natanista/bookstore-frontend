import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = []


  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.findAll();
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'action'];

  findAll(){
    this.service.findAll().subscribe(response => {
      console.log(response);
      this.categories = response;
    }
      
      )
}

}
