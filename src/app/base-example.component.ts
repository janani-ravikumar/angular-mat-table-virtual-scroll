import { Component, Input, OnInit } from '@angular/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { BehaviorSubject } from 'rxjs';

const DATA = Array.from({ length: 10 }, (v, i) => ({
  id: i + 1,
  name2: `Element #${i + 1}`,
  age: 15,
}));

@Component({
  selector: 'app-base-example',
  templateUrl: './base-example.component.html',
  styleUrls: ['./base-example.component.css'],
})
export class BaseExampleComponent implements OnInit {
  data:
     BehaviorSubject<
        {
          id: number;
          name2: string;
          age: number;
        }[]
      >
    = new BehaviorSubject<{
      id: number;
      name2: string;
      age: number;
    }[]>(null);
  ngOnInit() {
    this.data.next(
      Array.from({ length: 10 }, (v, i) => ({
        id: i + 1,
        name2: `Element #${i + 1}`,
        age: 18,
      }))
    );
  }

  DATA = Array.from({ length: 10 }, (v, i) => ({
    id: i + 1,
    name2: `Element #${i + 1}`,
    age: 18,
  }));

  nextBatch() {
    console.log('output');
     const d = this.data.value
      
      const v = Array.from({ length: 10 }, (v, i) => ({
        id: i + 11,
        name2: `Element #${i + 1}`,
        age: 28,
      }));
      const result = d.concat(v);
      console.log('output', result.length);
      this.data.next(result);
   
  }
}
