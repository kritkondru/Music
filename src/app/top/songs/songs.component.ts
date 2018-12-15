import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id');
  }

}
