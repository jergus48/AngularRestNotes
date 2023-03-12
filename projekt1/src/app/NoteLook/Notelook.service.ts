import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class NoteLookService {


    constructor(private http: HttpClient) { }

    getNote(id: any) {
        return this.http.get('http://127.0.0.1:8000/api/notes/' + id + '/')
    }
    changeNote(note: any) {

        return this.http.put('http://127.0.0.1:8000/api/notes/' + note.id + '/update/', note);
    }

}