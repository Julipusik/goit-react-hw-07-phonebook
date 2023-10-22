import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://653503dec620ba9358ec1467.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);