import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteLookService } from './Notelook.service';
@Component({
    selector: 'Note-Look',
    templateUrl: './NoteLook.component.html',

})
export class NoteLookComponent {
    userId: any;
    note: any = {};


    constructor(private route: ActivatedRoute, private service: NoteLookService) { }

    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        this.GetData(this.userId)
    }
    GetData(id: any) {
        this.service.getNote(id).subscribe(data => { this.note = data })
    }
    OnChange(note: any, name: string, text: string) {
        note.name = name
        note.text = text

        this.service.changeNote(note).subscribe()


    }

}