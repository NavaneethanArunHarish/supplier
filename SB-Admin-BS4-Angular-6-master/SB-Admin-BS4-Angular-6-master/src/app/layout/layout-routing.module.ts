import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'create-offer', loadChildren: './create-new-offer/create-new-offer.module#CreateNewOfferModule' },
            { path: 'create-offer-step2', loadChildren: './create-offer-step2/create-offer-step2.module#CreateOfferStep2Module' },
            { path: 'create-offer-step3', loadChildren: './create-offer-step3/create-offer-step3.module#CreateOfferStep3Module' },
            { path: 'create-offer-summary', loadChildren: './create-offer-summary/create-offer-summary.module#CreateOfferSummaryModule' },
            { path: 'offers', loadChildren: './offer/offer.module#OfferModule' },
            { path: 'offer-history', loadChildren: './offer-history/offer-history.module#OfferHistoryModule' },
            { path: 'edit-offer', loadChildren: './edit-offer/edit-offer.module#EditOfferModule' },
            { path: 'edit-quantity', loadChildren: './edit-quantity/edit-quantity.module#EditQuantityModule' },
            { path: 'add-end-date', loadChildren: './add-end-date/add-end-date.component.module#AddEndDateModule' },
            { path: 'archive', loadChildren: './archive/archive.component.module#ArchiveModule' },
            { path: 'change-price', loadChildren: './change-price/change.price.module#ChangePriceModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
