import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class NotesService {


    constructor(private http: HttpClient) { }

    getNote() {
        return this.http.get('http://127.0.0.1:8000/api/notes/')
    }
    addNote(name: string, text: string) {

        return this.http.post('http://127.0.0.1:8000/api/notes/create/', { name: name, text: text });
    }
    deleteNote(note: any) {

        return this.http.delete('http://127.0.0.1:8000/api/notes/' + note.id + '/delete/');
    }

}