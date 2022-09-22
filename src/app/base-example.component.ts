import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewData } from './view/view-data';

@Component({
  selector: 'app-base-example',
  templateUrl: './base-example.component.html',
  styleUrls: ['./base-example.component.css'],
})
export class BaseExampleComponent implements OnInit {
  data: BehaviorSubject<ViewData[]> = new BehaviorSubject<ViewData[]>([]);
  ngOnInit() {
    this.data.next(
      Array.from({ length: 10 }, (v, i) => ({
        id: i + 1,
        name2: `Element #${i + 1}`,
        age: 18,
      }))
    );
  }

  nextBatch() {
    const newValues = Array.from({ length: 10 }, (v, i) => ({
      id: i + 11,
      name2: `Element #${i + 1}`,
      age: 28,
    }));
    this.data.next(this.data.value.concat(newValues));
  }
}
