import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css'],
})
export class UserEditorComponent {
  @Input() user: User = new User();
  @Output() onSubmit = new EventEmitter();

  userEdit: User = new User();
  ngOnInit() {
    this.userEdit = { ...this.user };
  }
  show: boolean = false;

  submitClicked = () => this.onSubmit.emit(this.userEdit);
}
