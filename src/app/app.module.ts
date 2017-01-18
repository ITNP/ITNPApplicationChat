import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { pageLanding } from "../pages/landing/landing";
import { pageAuthentification } from "../pages/authentification/authentification";

@NgModule({
    declarations: [
        MyApp,
        pageLanding,
        pageAuthentification
    ],
    
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    
    bootstrap: [
        IonicApp
    ],
    
    entryComponents: [
        MyApp,
        pageLanding,
        pageAuthentification
    ],
    
    providers: [
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})

export class AppModule {}