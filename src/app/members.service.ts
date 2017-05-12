import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Member } from 'app/member.model';

@Injectable()
export class MembersService {
  members: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }
  getMembers(){
    return this.members;
  }
  addMember(newMember: Member){
    this.members.push(newMember);
  }
}
