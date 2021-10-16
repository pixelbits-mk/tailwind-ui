import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
  open: boolean
  openModal: boolean 
  constructor() {
    this.open = false
    this.openModal = false
  }

  ngOnInit() {

  }

  openDialog() {
    this.open = true
    setTimeout(() => {
      this.openModal = true
    })
  }
}
