import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home-screen-app',
    templateUrl: './home-screen-app.component.html',
    styleUrls: ['./home-screen-app.component.scss']
})
export class HomeScreenAppComponent {
    @Input() appName: string;
    @Input() background: string;

    get backgroundImageStyle() {
        if (this.background !== undefined) {
            return {'background-image': `url(${this.background})`};
        }
    }
}
