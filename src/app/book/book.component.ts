import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientServiceService} from '../client-service.service';
import {CardModel} from '../CardModel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  card: CardModel;

  constructor(public activateRoute: ActivatedRoute, public service: ClientServiceService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.service.getById(params.id).subscribe(data => {
        this.card = data;
        console.log(data);
      });
    });
  }
}
