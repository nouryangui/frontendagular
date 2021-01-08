import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';

import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { MemberListComponent } from './member-list/member-list.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

import { MemberFormComponent } from './member-form/member-form.component';
import { SharedModule } from '../@root/shared.module';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ToastrModule } from 'ngx-toastr';
import { PublicationFormComponent } from './publication-form/publication-form.component';
import { PubComponent } from './member-list/pub/pub.component';
import { MemberPublicationFormComponent } from './member-list/member-publication-form/member-publication-form.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { EventComponent } from './member-list/event/event.component';
import { ToolComponent } from './member-list/tool/tool.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    MsgIconBtnComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    MemberListComponent,
    MemberFormComponent,
    PublicationListComponent,
    ToolListComponent,
    ToolFormComponent,
    EventListComponent,
    EventFormComponent,
    PublicationFormComponent,
    PubComponent,
    MemberPublicationFormComponent,
    MemberDetailComponent,
    EventComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent],
  entryComponents:[MemberFormComponent]

})
export class AppModule { }
