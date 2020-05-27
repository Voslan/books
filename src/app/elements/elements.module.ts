import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { NotesComponent } from './notes/notes.component';
import { ApiServerComponent } from './api-server/api-server.component';
import { CssGridLayoutModule } from './css-grid-layout/css-grid-layout.module';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { NatourComponent } from './natour/natour.component';

// natour


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'lazyLoading', component: LazyLoadingComponent},
  {path: 'todo', loadChildren: () => ToDoListModule},
  {path: 'notes', component: NotesComponent},
  {path: 'apiServer', component: ApiServerComponent},
  {path: 'cssGridLayout', loadChildren: () => CssGridLayoutModule},
  {path: 'natour', component: NatourComponent}
];

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    PipesModule,
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    LazyLoadingComponent,
    NotesComponent,
    ApiServerComponent,
    NatourComponent
  ],
  providers: []
})
export class ElementsModule {}
