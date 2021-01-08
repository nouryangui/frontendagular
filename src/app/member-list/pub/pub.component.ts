import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberPublicationFormComponent } from '../member-publication-form/member-publication-form.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.css']
})
export class PubComponent implements OnInit {
  protected _onDestroy = new Subject<void>();

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  onAdd() {

    const dialogRef = this.matDialog.open(MemberPublicationFormComponent, {
      disableClose: false,
      width: '30%',
    });
    dialogRef.afterClosed().pipe(takeUntil(this._onDestroy)).subscribe(result => {

console.log("cc")    });
  }
}
