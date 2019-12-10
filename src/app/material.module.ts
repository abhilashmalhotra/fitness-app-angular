import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule],
    exports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule]
})

export class MaterialModule {

}