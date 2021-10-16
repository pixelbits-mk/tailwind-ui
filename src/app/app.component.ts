import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('btn', { read: ElementRef })
  btn!: ElementRef

  title = 'tailwind-ui';
  open = false
  constructor(private matDialog: MatDialog) {
    
  }
  openModal() {
    this.matDialog.open(ModalComponent, { panelClass: 'search-dialog-modal', data: { element: this.btn.nativeElement } })
  }
}
