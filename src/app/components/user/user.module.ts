import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user-item/user-item.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule } from '@angular/forms';
import { UserEditorComponent } from './user-editor/user-editor.component';



@NgModule({
  declarations: [
    UserComponent,
    ListUsersComponent,
    UserEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListUsersComponent
  ]
})
export class UserModule { }
