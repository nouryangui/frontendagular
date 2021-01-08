import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Publication } from '../models/publication.model';
import { MemberPublication } from '../models/memberpublication.model';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private path = `${environment.gatewayEndpoint}/member-service/api/members`;


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getAllMembers(): Promise<Member[]> {
    return this.httpClient.get<Member[]>(`${this.path}`).toPromise();
  }
  getMembersPaginator(itemPage: number): Promise<Member[]> {

    const options = new HttpParams()
      .set('page', String(itemPage))
    return this.httpClient.get<Member[]>(`${this.path}/all`, { params: options }).toPromise();
  }

  getMemberById(id: number): Promise<Member> {
    return this.httpClient.get<Member>(`${this.path}/${id}`).toPromise();
  }
  saveStudent(member: any): Promise<Member> {
    if (!!member.id) {
      return this.updateStudent(member.id, member);
    } else {
      return this.createStudent(member);
    }
  }

  createStudent(member: any): Promise<Member> {
    return this.httpClient.post<Member>(`${this.path}/students`, member).toPromise();
  }

  updateStudent(id: string, member: any): Promise<Member> {
    return this.httpClient.put<Member>(`${this.path}/students`, member).toPromise();
  }
  saveTeacher(member: any): Promise<Member> {
    if (!!member.id) {
      return this.updateTeacher(member.id, member);
    } else {
      return this.createTeacher(member);
    }
  }

  createTeacher(member: any): Promise<Member> {
    return this.httpClient.post<Member>(`${this.path}/teachers`, member).toPromise();
  }

  updateTeacher(id: string, member: any): Promise<Member> {
    return this.httpClient.put<Member>(`${this.path}/teachers`, member).toPromise();
  }


  removeMemberById(id: string): Promise<Member> {
    return this.httpClient.delete<Member>(`${this.path}/${id}`).toPromise();

  }
  getMemberCount(): Promise<Number> {
    return this.httpClient.get<Number>(`${this.path}/count`).toPromise();
  }

  findAllTeacher(): Promise<Member[]> {
    return this.httpClient.get<Member[]>(`${this.path}/teachers`).toPromise();
  }


  affectMemberToPublication(idMember:number,idPublication:number):Promise<MemberPublication>
  {
    return this.httpClient.post<MemberPublication>(`${this.path}/publications/${idMember}/${idPublication}`,[idMember,idPublication]).toPromise();
  }
  getPublicationMember(idMember:number): Promise<Publication[]> {

    return this.httpClient.get<Publication[]>(`${this.path}/publications/${idMember}`).toPromise();
  }
}
