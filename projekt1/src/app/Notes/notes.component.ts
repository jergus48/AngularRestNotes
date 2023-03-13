


import { Component } from '@angular/core';
import { NotesService } from './notes.service';
@Component({
    selector: 'notes-component',
    templateUrl: './notes.component.html',
    styleUrls: []
})
export class NotesComponent {
    notes: any = [{ name: "default", text: "cau" }];
    showAdd = false;
    constructor(private NoteService: NotesService) { }

    ngOnInit() {
        this.GetData()

    }
    toggleComponent() {
        this.showAdd = !this.showAdd;
    }

    setValue(name: string, text: string) {

        this.NoteService.addNote(name, text).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);
        this.showAdd = false
    }

    GetData() {
        this.NoteService.getNote().subscribe((data: any) => { this.notes = data })
    }

    OnDelete(note: any) {
        this.NoteService.deleteNote(note).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);

    }

}