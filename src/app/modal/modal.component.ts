import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
    const e = this.data.element as HTMLElement
    if (e) {
      var rect = e.getBoundingClientRect();
      this.dialogRef.updatePosition({
        top: `${rect.top}px`, 
        left: `${rect.left}px`
      })      
    }
  }

}
