import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-alert',
  templateUrl: './snack-bar-alert.component.html',
  styleUrls: ['./snack-bar-alert.component.scss']
})
export class SnackBarAlertComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }
  snackBarRef = inject(MatSnackBarRef);
}
