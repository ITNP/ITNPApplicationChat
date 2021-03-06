import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar, Splashscreen } from "ionic-native";

import { pageLanding } from "../pages/landing/landing";


@Component({
    templateUrl: "app.html"
})

export class MyApp {
    rootPage = pageLanding;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}