import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule]
})

export class MaterialModule {

}