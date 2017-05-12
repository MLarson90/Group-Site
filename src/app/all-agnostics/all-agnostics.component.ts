import { Component, OnInit } from '@angular/core';
import { routing } from 'app/app.routing';
import { Router } from '@angular/router';
import { MembersService } from 'app/members.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { RolePipe } from 'app/role.pipe';


@Component({
  selector: 'app-all-agnostics',
  templateUrl: './all-agnostics.component.html',
  styleUrls: ['./all-agnostics.component.css'],
  providers: [MembersService]
})
export class AllAgnosticsComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private memberService: MembersService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }
  goToDetailPage(clicked){
    this.router.navigate(['members', clicked.$key]);
  }
  filterByRole: string = "allMembers";
  onChange(optionFromMenu){
    this.filterByRole = optionFromMenu;
  }

}
