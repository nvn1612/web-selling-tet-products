import { createSlice } from '@reduxjs/toolkit'

export const userSlide = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    access_token: '',
    phone: '',
    address: '',
    avatar: '',
    id: '',
    isAdmin: false
  },
  reducers: {
    updateUser:(state, action) => {
        const {_id ='', email  = '', name  = '', access_token  = '', phone = '', address = '', avatar = '', isAdmin} = action.payload
        state.id = _id
        state.name = name;
        state.email = email;
        state.phone = phone;
        state.address = address;
        state.avatar = avatar;
        state.access_token = access_token;
        state.isAdmin = isAdmin;

    },
    resetUser:(state) => {
      state.id = '';
      state.name = '';
      state.email = '';
      state.phone = '';
      state.address = '';
      state.avatar = '';
      state.access_token = '';
      state.isAdmin = false;
  },
  },
})


export const { updateUser,resetUser} = userSlide.actions

export default userSlide.reducer