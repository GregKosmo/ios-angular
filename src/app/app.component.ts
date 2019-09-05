import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    date: Date;

    ngOnInit() {
        this.date = new Date();

        setInterval(() => {
            this.date = new Date();
        }, 1000);
    }

    get hourHandStyle() {
        const hours = this.date.getHours();
        const degrees = ((hours * 360) / 12) - 90;

        return {'transform': `rotate(${degrees}deg)`};
    }

    get minuteHandStyle() {
        const minutes = this.date.getMinutes();
        const degrees = ((minutes * 360) / 60) - 90;

        return {'transform': `rotate(${degrees}deg)`};
    }

    get secondHandStyle()  {
        const seconds = this.date.getSeconds();
        const degrees = ((seconds * 360) / 60) - 90;

        return {'transform': `rotate(${degrees}deg)`};
    }
}
