import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

@Component({
  selector: 'view-example',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, OnChanges {
  @Input() data = [];
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  dataSource: TableVirtualScrollDataSource<never>;
  @Output()
  scrolled: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  // }

  ngOnInit() {
    console.log('data', this.data);
    this.dataSource = new TableVirtualScrollDataSource(this.data);
  }

  ngOnChanges() {
    console.log('on change', this.data);
    this.dataSource = new TableVirtualScrollDataSource(this.data);
  }

  displayedColumns = ['id', 'name2', 'age'];

  nextBatch(index: any) {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${index + 10}`);
    if (index + 10 === 10.75) {
      console.log('scrolled');
      this.scrolled.emit(true);
    }
  }
}
