/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationFormComponent } from './publication-form/publication-form.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { PubComponent } from './member-list/pub/pub.component';
import { EventComponent } from './member-list/event/event.component';
import { ToolComponent } from './member-list/tool/tool.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lock', component: LockComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: RootComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'components/price-table', component: PriceTableComponent },
      { path: 'components/panels', component: PanelsComponent },
      { path: 'components/wizard', component: WizardComponent },{
        path: 'members',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: MemberListComponent,
          },
          {
            path: 'create',
            pathMatch: 'full',
            component: MemberFormComponent,
          },
          {
            path: ':id/edit',
            pathMatch: 'full',
            component: MemberFormComponent,
          },
          {
            path: 'publications',
            pathMatch: 'full',
            component: PubComponent,
          },
          {
            path: 'tools',
            pathMatch: 'full',
            component:ToolComponent ,
          },
          {
            path: 'events',
            pathMatch: 'full',
            component: EventComponent,
          },
         
          {
            path: '**',
            redirectTo: '',
          }
        ]
      },
      {
        path: 'publications',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: PublicationListComponent
          },
          {
            path: 'create',
            pathMatch: 'full',
            component: PublicationFormComponent,
          },
          {
            path: ':id/edit',
            pathMatch: 'full',
            component: PublicationFormComponent,
          },
         
          {
            path: '**',
            redirectTo: '',
          }
        ]
      },
      {
        path: 'tools',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: ToolListComponent
          },
          {
            path: 'create',
            pathMatch: 'full',
            component: ToolFormComponent,
          },
          {
            path: ':id/edit',
            pathMatch: 'full',
            component: ToolFormComponent,
          },
         
          {
            path: '**',
            redirectTo: '',
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: EventListComponent
          },
          {
            path: 'create',
            pathMatch: 'full',
            component: EventFormComponent,
          },
          {
            path: ':id/edit',
            pathMatch: 'full',
            component: EventFormComponent,
          },
         
          {
            path: '**',
            redirectTo: '',
          }
        ]
      },
    ],
  }
    
  
  
  

];

export const routing = RouterModule.forRoot(routes);

