import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="navbar navbar-fixed-top navbar-transparent" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                    <button id="menu-toggle" type="button" class="navbar-toggle">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar bar1"></span>
                        <span class="icon-bar bar2"></span>
                        <span class="icon-bar bar3"></span>
                    </button>
                    <a class="navbar-brand" href="#">Day-Day</a>
                    </div>
                </div>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}