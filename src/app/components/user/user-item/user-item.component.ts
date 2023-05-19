import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserComponent {
  constructor(private userService: UserService) {}

  @Input() user: User = new User();

  @Output() onDelete = new EventEmitter<any>();
  @Output() onDuplicate = new EventEmitter<any>();

  deleteClicked() {
    this.onDelete.emit(this.user);
  }

  duplicateClicked() {
    this.onDuplicate.emit(this.user);
  }

  editUser(user: User) {
    this.userService.edit(user).subscribe({
      next: (data) => (this.user = data ),
      error: e=> console.log(e)
    });
  }

  // submitClicked(userName:string, pass:string, name:string, email:string){
  //   this.user.userName= userName,
  //   this.user.name= name,
  //   this.user.pass= pass,
  //   this.user.email= email
  // };
}
