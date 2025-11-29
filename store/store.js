import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import brandReducer from "./brand/brand.slice";
import tagReducer from "./tag/tag.slice";
import categoryReducer from "./category/category.slice";
import productReducer from "./product/product.slice";
import customerReducer from "./customer/customer.slice";
import settingsReducer from "./settings/settings.slice";
import cartReducer from "./cart/cart.slice";
import addressReducer from "./address/address.slice";
import orderReducer from "./order/order.slice";
import contactReducer from "./contact/contact.slice";
import transactionReducer from "./transaction/transaction.slice";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
  brand: brandReducer,
  tag: tagReducer,
  category: categoryReducer,
  product: productReducer,
  customer: customerReducer,
  settings: settingsReducer,
  cart: cartReducer,
  address: addressReducer,
  order: orderReducer,
  contact: contactReducer,
  transaction: transactionReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    // "category",
    "settings",
    "cart",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
