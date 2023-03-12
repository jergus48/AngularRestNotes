import { NotesComponent } from './Notes/notes.component'
import { AppComponent } from './app.component'
import { NoteLookComponent } from './NoteLook/Notelook.component'
export const RoutingTable = [
    { path: '', component: NotesComponent },
    { path: 'note/:id', component: NoteLookComponent },
    { path: '**', redirectTo: '' },

]