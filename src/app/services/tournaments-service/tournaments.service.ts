import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { getDatabase, ref, onValue} from "firebase/database";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

constructor( private database: Database) { }


getTournaments(): Observable<any> {
  const starCountRef = ref(this.database, 'tournaments');
  return new Observable((observer) => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      observer.next(data);
    });
  });
}
}
