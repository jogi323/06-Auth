import { Component, OnInit, Input } from "@angular/core";

import { SearchService } from "../../_services/search.service";
import { Search } from "../models/search.model";

@Component({
    selector: 'app-search',
    templateUrl: './search-list.component.html'
})
export class SearchComponent implements OnInit {
    @Input() search: Search;
    //searches: Search[];

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