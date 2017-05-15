import { Component, Input } from "@angular/core";

import { Search } from "./search.model";
import { SearchService } from "./search.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class SearchComponent {
    @Input() search: Search;

    constructor(private messageService: SearchService) {}

    onChat() {
        alert("working on it");
    }

    onMessage() {
        alert("working on it");
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.search.userId;
    }
}