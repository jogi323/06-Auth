import { Component } from "@angular/core";

@Component({
    selector: 'app-searches',
    template: `
        <div class="row">
            <app-search-input></app-search-input>
        </div>
        <hr>
        <div class="row">
            <app-search-list></app-search-list>
        </div>
    `
})
export class SearchesComponent {

}