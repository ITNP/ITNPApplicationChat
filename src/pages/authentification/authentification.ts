import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import * as $ from "jquery";

@Component({
    selector: "pageAuthentification",
    templateUrl: "authentification.html"
})

export class pageAuthentification {
    public navigationController: NavController;
    
    constructor() {}
    
    castEvent(mEventType: string, mEventName: string, mEventCallback) {
        $("body").on(mEventType, "[data-event=\"" + mEventName + "\"]", mEventCallback);
    }
    
    getLocation(mLocation: string) {
        return $("[data-location=\"" + mLocation + "\"]");
    }
    
    getType(mType: string) {
        return $("[data-type=\"" + mType + "\"]");
    }
    
    ngAfterViewInit() {
        let mElementLocation = this.getLocation("page.authentification.segment");
        this.castEvent("click", "page.authentification.segment.click", function(mEvent) {
            let mSegmentItem = $(this).data("segment");
            $("ion-slides").slideTo(1);
        });
    }
    
    switchTab(mTab: string): void {
        let mTitle = "";
        
        switch(mTab) {
            case "registration": {
                mTitle = "Registration";
            } break;
            
            case "login": {
                mTitle = "Anmeldung";
            } break;
        }
    
        $(".toolbar-title").text(mTitle);
    }
}
