import { stringify } from "qs";
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Params } from "../../components/Body";


interface UserState {
  token?: String,
  date?: String,
  error?: String,
}

const initialState: UserState = { token: '', date: '' };
export const fetchUser = createAsyncThunk<
  // type arguements
  UserState,
  {
    user: Params
  }
>("user/fetchuser",
  async (payload, thunkApi) => {
    const user: UserState = {}
    const response = await fetch(import.meta.env.VITE_BASE_URL + 'authentication', {    // fetch is a promise           
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload.user)
    });
    const data = await response.json();
    if (response.status === 200) {
      user.token = data.token;
      user.date = data.date;
    }
    if (response.status === 400) {
      user.error = data.error;
    }
    // base url    
    return user;
  });


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.token = action.payload.token
      state.date = action.payload.date
    })
  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer