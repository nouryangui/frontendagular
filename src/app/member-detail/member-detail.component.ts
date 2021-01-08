import { Component, OnInit,Inject } from '@angular/core';
import { Publication } from '../../models/publication.model';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
}) 
export class MemberDetailComponent implements OnInit {
  publications: Publication[];
  member:Member;
  currentItemId:number;
  constructor(private memberService: MemberService, private dialogRef: MatDialogRef<MemberDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit(): void {
    if (!!this.data) {
      this.currentItemId = this.data.memberId;

    } 
    if (!!this.currentItemId) {
      this.memberService.getMemberById(this.currentItemId).then(item => {
        this.member = item;
      });
    }
    this.showMemberDetail();

  }
 
  showMemberDetail() {
    this.memberService.getPublicationMember(this.currentItemId).then(data => this.publications = data)

  }
}