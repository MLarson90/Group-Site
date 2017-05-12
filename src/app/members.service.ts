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
  getMemberById(memberId: string){
    return this.database.object('members/' +memberId);
  }
  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                motto: localUpdatedMember.motto,
                                role: localUpdatedMember.role,
                                birthday: localUpdatedMember.birthday});
  }
  deleteMember(memberToDelete){
    var memberEntryInFirebase = this.getMemberById(memberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
