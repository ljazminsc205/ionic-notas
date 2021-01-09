import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Observable<any[]>;
  newValue: string;

  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges()
  }
  save() {
    this.firestore.collection('items').add({
      name: this.newValue
    });
    this.newValue = ""
  }

}
