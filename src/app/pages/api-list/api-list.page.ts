import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.page.html',
  styleUrls: ['./api-list.page.scss'],
  standalone: false
})
export class ApiListPage implements OnInit {

  books: any[] = [];
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {

    this.loading = true;

    this.apiService.getLibros(50).subscribe({

      next: (response) => {

        this.books = response.results.map((item: any) => {

          const id = item.url.split('/').filter(Boolean).pop();

          return {
            ...item,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          };

        });

        this.loading = false;
      },

      error: (error) => {
        console.error('Error:', error);
        this.loading = false;
      },

    });

  }
}