import { Component, OnInit, Input } from "@angular/core";

import { SearchService } from "../../_services/search.service";
import { Search } from "../models/search.model";

@Component({
    selector: 'app-search-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-search
                   [search]="search"
                    *ngFor="let search of searches"></app-search>
        </div>
    `
})
export class SearchListComponent implements OnInit {
    @Input() search: Search;
    searches: Search[];

    constructor(private searchService: SearchService) {}

    ngOnInit() {
        // this.searchService.getSearches()
        //     .subscribe(
        //         (searches: Search[]) => {
        //             this.searches = searches;
        //         }
        //     );
    }
}