import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { pageAuthentification } from "../authentification/authentification";

@Component({
    selector: "pageLanding",
    templateUrl: "landing.html"
})

export class pageLanding {
    constructor(public navigationController: NavController) {
        
    }
    
    private mPageAuthentification:pageAuthentification = new pageAuthentification();
    
    pageLandingOpenAuthentification(mTab: string): void {
        this.navigationController.push(pageAuthentification);
        this.mPageAuthentification.switchTab(mTab);
    }
}
