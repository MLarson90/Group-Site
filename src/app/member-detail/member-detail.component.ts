import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MembersService } from 'app/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MembersService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private membersService: MembersService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.memberId = urlParameters['id'];
   });
   this.memberToDisplay = this.membersService.getMemberById(this.memberId);
  }

}
