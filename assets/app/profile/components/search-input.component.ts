import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { SearchService } from "../../_services/search.service";
import { Search } from "../models/search.model";

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html'
})
export class SearchInputComponent implements OnInit {
    search: Search;
    searches: Search[];
    types = [
       {id: 1, name: "listening"},
       {id: 2, name: "reading"},
       {id: 3, name: "watching"},
       {id: 4, name: "feeling"}
     ];
    selectedValue = null;

    constructor(private searchService: SearchService) {
        this.selectedValue = {
            name : ''
        }
    }
    onChange() {
        console.log("selectedValue");
    }
    
    onSubmit(form: NgForm) {
        const search = new Search(form.value.content, form.value.contentType.name, 'Max');
        this.searchService.addSearch(search)
            .subscribe(
                (searches: Search[]) => {
                    this.searches = searches;
                }
            );
            // .subscribe(
            //     data => console.log(data),
            //     error => console.error(error)
            // );
        // this.searchService.getSearches(search)
        //     .subscribe(
        //         data => console.log(data),
        //         error => console.error(error)
        //     );
            
    }

    onClear(form: NgForm) {
        this.search = null;
        form.resetForm();
    }

    ngOnInit(): void {
        this.searchService.searchIsEdit.subscribe(
            (search: Search) => this.search = search
        );
    }
}

