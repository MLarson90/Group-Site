import { Component, OnInit } from '@angular/core';
import { routing } from 'app/app.routing';
import { Router } from '@angular/router';
import { MembersService } from 'app/members.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-all-agnostics',
  templateUrl: './all-agnostics.component.html',
  styleUrls: ['./all-agnostics.component.css'],
  providers: [MembersService]
})
export class AllAgnosticsComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  constructor(private router: Router, private memberService: MembersService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}
