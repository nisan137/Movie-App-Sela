import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';



@NgModule({
  declarations: [
    MovieEditorComponent,
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MovieListComponent
  ]
})
export class MovieModule { }
