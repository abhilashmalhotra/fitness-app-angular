import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-training-confirm',
  templateUrl: './training-confirm.component.html',
  styleUrls: ['./training-confirm.component.css']
})
export class TrainingConfirmComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TrainingConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
