import { Component, OnInit } from '@angular/core';
import { Member } from 'app/member.model';
import { MembersService} from 'app/members.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MembersService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MembersService) { }
    submitForm(name: string, motto: string, role: string, birthday: string){
      var newMember: Member = new Member(name,motto,role,birthday);
      this.memberService.addMember(newMember);
    }
  ngOnInit() {
  }

}
