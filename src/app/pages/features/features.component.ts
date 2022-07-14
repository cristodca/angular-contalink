import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let observable: Observable<number> = this.getObservable()
    
    observable.subscribe(value => {
      console.log(value)
    })
  }

  getObservable() : Observable<number> {
    return Observable.create((observer: Observer<number>) => {
      setTimeout(() => {
        observer.next(1)
      }, 1000);
      setTimeout(() => {
        observer.next(2)
      }, 1000);
      setTimeout(() => {
        observer.next(3)
        observer.complete()
      }, 1000);
    })
  }

}
