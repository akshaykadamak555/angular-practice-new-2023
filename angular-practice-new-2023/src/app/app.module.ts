import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Basic/first/first.component';
import { LifecycleHooksComponent } from './Basic/lifecycle-hooks/lifecycle-hooks.component';
import { ViewEncapsulationParentComponent } from './View Encapsulation/view-encapsulation-parent/view-encapsulation-parent.component';
import { ViewEncapsulationChildComponent } from './View Encapsulation/view-encapsulation-child/view-encapsulation-child.component';
import { ParentComponent } from './Component-communication/parent/parent.component';
import { ChildComponent } from './Component-communication/child/child.component';
import { UnrelatedComponent } from './Component-communication/unrelated/unrelated.component';
import { ContentProjectionComponent } from './Content-projection/content-projection/content-projection.component';
import { DataBindingComponent } from './Data Binding/data-binding/data-binding.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { AttributeDirectivesComponent } from './Directives/attribute-directives/attribute-directives.component';
import { DependencyInjectionComponent } from './Dependancy Injection/dependency-injection/dependency-injection.component';
import { StandaloneComponentComponent } from './Standalone components/standalone-component/standalone-component.component';
import { RoutingContainerComponent } from './Routing/routing-container/routing-container.component';
import { TemplateDrivenFormsComponent } from './Forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { HttpclientComponent } from './Http Client/httpclient/httpclient.component';
import { ViewchildComponent } from './Viewchild/viewchild/viewchild.component';
import { InternationalizationComponent } from './Internationalization/internationalization/internationalization.component';
import { AnimationsComponent } from './Animations/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LifecycleHooksComponent,
    ViewEncapsulationParentComponent,
    ViewEncapsulationChildComponent,
    ParentComponent,
    ChildComponent,
    UnrelatedComponent,
    ContentProjectionComponent,
    DataBindingComponent,
    PipesComponent,
    AttributeDirectivesComponent,
    DependencyInjectionComponent,
    StandaloneComponentComponent,
    RoutingContainerComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    HttpclientComponent,
    ViewchildComponent,
    InternationalizationComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
