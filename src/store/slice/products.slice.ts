import { Product } from '../../types/index';
import { stringify } from "qs";
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..'


interface ProductsState {
  products: Product[],
}

const initialState: ProductsState = { products: [] };
export const fetchProduct = createAsyncThunk<
  // type arguements
  Product,
  {
    method: string, product: Product
  }
>("products/fetchProduct",
  async (payload, thunkApi) => {
    const product: Product = payload.product
    // base url    
    return product;
  });


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state: any, action: PayloadAction<Product>) => { state.products.push(action.payload) }       // add product to state
  },
  extraReducers(builder) {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      // Add user to the state array
      state.products.push(action.payload)
    })
  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.products.products
export const {
  addProduct,
} = productsSlice.actions;

export default productsSlice.reducer