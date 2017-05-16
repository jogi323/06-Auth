import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Search } from "../profile/models/search.model";

@Injectable()
export class SearchService {
    private searches: Search[] = [];
    searchIsEdit = new EventEmitter<Search>();

    constructor(private http: Http) {
    }

    addSearch(search: Search) {
        const body = JSON.stringify(search);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/search' + token, body, {headers: headers})
            .map((response: Response) => {
                const searches = response.json().obj;
                let transformedsearches: Search[] = [];
                for (let search of searches) {
                    transformedsearches.push(new Search(
                        search.content,
                        search.contentType,
                        search.user.firstName,
                        search._id,
                        search.user._id)
                    );
                }
                this.searches = transformedsearches;
                return transformedsearches;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getSearches(search: Search) {
        const body = JSON.stringify(search);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('http://localhost:3000/search' + token)
            .map((response: Response) => {
                const searches = response.json().obj;
                let transformedsearches: Search[] = [];
                for (let search of searches) {
                    transformedsearches.push(new Search(
                        search.content,
                        search.contentType,
                        search.user.firstName,
                        search._id,
                        search.user._id)
                    );
                }
                this.searches = transformedsearches;
                return transformedsearches;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editSearch(search: Search) {
      //  this.search.emit(search);
    }

    updateSearch(search: Search) {
        const body = JSON.stringify(search);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/search/' + search.searchId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteSearch(search: Search) {
        this.searches.splice(this.searches.indexOf(search), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/search/' + search.searchId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}