import { Component, Input, OnInit } from '@angular/core';
import { MembersService } from 'app/members.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MembersService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  constructor(private membersService: MembersService) { }

  ngOnInit() {
  }
  beginUpdatingMember(memberToUpdate){
    this.membersService.updateMember(memberToUpdate);
  }
  beginDeletingMember(memberToDelete){
    if(confirm("You sure?")){
      this.membersService.deleteMember(memberToDelete);
    }
  }
}
