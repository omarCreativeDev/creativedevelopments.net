import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';

@NgModule({
  declarations: [AboutMePageComponent],
  imports: [CommonModule, SharedModule, AboutMeRoutingModule],
})
export class AboutMeModule {}