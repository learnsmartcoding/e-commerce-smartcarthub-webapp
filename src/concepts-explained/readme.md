# E-Commerce Angular Developer Series | NgModule in Angular | EP3 

Definition: An NgModule (Angular Module) is a container for a cohesive block of code dedicated to a specific application domain, workflow, or feature.

Purpose: It helps organize and encapsulate different parts of your application.

### Creating a Module:

Use the @NgModule decorator to define a module.
Specify metadata such as declarations (components, directives, pipes), providers, imports, and exports.

```
@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductListComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
```

### Why Multiple NgModules:

- Organizational Structure: Break down a large application into manageable pieces.
- Reusability: Encapsulate features or shared functionalities into separate modules that can be reused across the app or even in different projects.
- Lazy Loading: Split your application into feature modules, and load them on-demand for better performance.

### Contents of NgModule:

- Declarations: Components, directives, and pipes that belong to the module.
- Imports: Other modules that this module depends on.
- Providers: Services and other objects that should be available to the whole module.
- Bootstrap: The main application view, called the root component, that Angular creates and inserts into the index.html host web page.

Example:
```
@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In this example:

- declarations include components specific to this module.
- imports bring in other modules.
- providers define services available to components.
- bootstrap specifies the root component.

### Conclusion:
NgModule is a fundamental concept in Angular, helping you structure your application, promote reusability, and facilitate modular development. It's especially useful in large-scale applications where organization and separation of concerns become crucial.