import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './Notes/notes.component';
import { NoteLookComponent } from './NoteLook/Notelook.component';
import { RoutingTable } from './routes';
import { NotesService } from './Notes/notes.service';

@NgModule({
  declarations: [
    AppComponent, NotesComponent, NoteLookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RoutingTable),
    HttpClientModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
