import { inject } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductModel } from "../models/product.model";

export const productResolver: ResolveFn<ProductModel> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    return inject(ProductService).getProduct(+route.paramMap.get('productId')!);
  };