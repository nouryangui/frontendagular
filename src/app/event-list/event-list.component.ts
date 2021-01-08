import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from '../../services/event.service';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { takeUntil } from 'rxjs/operators';
import { EventFormComponent } from '../event-form/event-form.component';
import { ConfirmDialogComponent } from '../../@root/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService,
    private dialog: MatDialog, private matDialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'title', 'date', 'location', "actions"];
  public events: Event[];
  totalPages: number;
  currentPage: number;
  protected _onDestroy = new Subject<void>();
  ngOnInit(): void {
    this.currentPage = 0;
    this.fetchDataSourcePaginator();
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();

  }

  fetchDataSourcePaginator(): void {
    this.eventService.getEventsPaginator(this.currentPage).then(data => {
      this.totalPages = data['totalElements'];
      this.events = data['content']

    });
  }
  nextPage(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.fetchDataSourcePaginator();
  }
  onAdd() {
    const dialogRef = this.matDialog.open(EventFormComponent, {
      disableClose: false,
    });
    dialogRef.afterClosed().pipe(takeUntil(this._onDestroy)).subscribe(result => {

      this.fetchDataSourcePaginator();
    });
  }
  onEdit(eventId: number) {

    const dialogRef = this.matDialog.open(EventFormComponent, {
      disableClose: false,
      data: { eventId: eventId }
    });
    dialogRef.afterClosed().pipe(takeUntil(this._onDestroy)).subscribe(result => this.fetchDataSourcePaginator()

    );

  }
  onRemoveAccount(id: any): void {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.componentInstance.confirmButtonColor = 'warn';

    dialogRef.afterClosed().pipe(takeUntil(this._onDestroy)).subscribe(isDeleteConfirmed => {
      console.log('removing: ', isDeleteConfirmed);
      if (isDeleteConfirmed) {
        this.eventService.removeEventById(id).then(() => this.fetchDataSourcePaginator());
      }
    });
  }
}
