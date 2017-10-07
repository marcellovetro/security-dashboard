import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Domain} from '../object/domain';

@Injectable()
export class DomainService {
    constructor(private http: Http) {
    }

    /**
     * metodo per lanciare la ricerca
     * @param term
     * @returns {Observable<Domain[]>}
     */
    search(term: any): Observable<Domain[]> {
        return this.http.get('http://localhost/security-dashboard/service/domain.php?term=' + term)
            .map(res => res.json())
            .catch(this.handleError);
    }

    /**
     * metodo per ottenere la lista completa dei domini
     * @returns {Observable<Domain[]>}
     */
    getList(): Observable<Domain[]> {
        return this.http.get('http://localhost/security-dashboard/service/domain.php')
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
