import express from "express";
import { 
          createProductController ,
          getProductController,
          getSingleProductController,
          productPhotoController ,
          deleteProductController ,
          updateProductController, 
          productFiltersController,
          productCountController,
          productListController,
          searchProductController,
          realtedProductController,
          productCategoryController,
          braintreeTokenController,
          braintreePaymentController,
                            } from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//routes Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product 
router.post('/product-filters',productFiltersController);

//product count 
router.get('/product-count',productCountController);

// product per page 
router.get('/product-list/:page',productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//Payment routes
//token
router.get('/braintree/token',braintreeTokenController);

//payments
router.post('/braintree/payment',requireSignIn,braintreePaymentController);

export default router;