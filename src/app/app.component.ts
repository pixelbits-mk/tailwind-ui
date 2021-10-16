import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tailwind-ui';
  constructor(private matDialog: MatDialog) {
    
  }
  openModal() {
    this.matDialog.open(ModalComponent, { panelClass: 'modal'})
  }
}
