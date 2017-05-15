import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";
import { SearchService } from "./searches/search.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, SearchService]
})
export class AppComponent {
}