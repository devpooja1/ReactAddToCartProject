import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };

  // const wishlistPersistConfig={
  //   key:'wishlist',
  //   storage,
  // };
  const persistedReducer = persistReducer(persistConfig, cartReducer);
  // const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlistReducer);


const store= configureStore({
    reducer:{

        mycart:persistedReducer,
        // wishlist: persistedWishlistReducer, // Persisted wishlist reducer


    },
});


export const persistor = persistStore(store);
export default store;