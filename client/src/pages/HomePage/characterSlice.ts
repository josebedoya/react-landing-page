import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { API } from '../../api';

interface IState {
  isLoading: boolean;
  isSubmitting: boolean;
  isSaved: boolean;
  error: unknown | null;
  data: Array<object>;
}

interface IFormFields {
  title: string;
  image: string;
  category: string;
  summary: string;
  id?: number | null;
}

interface IVote {
  characterId: number;
  vote: string;
}

const initialState: IState = {
  isLoading: false,
  isSubmitting: false,
  isSaved: false,
  error: null,
  data: [],
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    try {
      const response = await API.get('/characters');
      const characters = response.data.map((character: any) => ({
        ...character,
        key: character.id,
      }));
      return characters;
    } catch (err) {
      return err;
      // return rejectWithValue(err.response.data);
    }
  },
);

export const createCharacter = createAsyncThunk(
  'characters/createCharacter',
  async (data: IFormFields, { rejectWithValue }) => {
    try {
      const response = await API.post('/characters', data);
      response.data.key = response.data.id;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const createCharacterVote = createAsyncThunk(
  'characters/createCharacterVote',
  async (data: IVote, { rejectWithValue }) => {
    try {
      const response = await API.post('/characterVote', data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const courseCategoriesSlice = createSlice({
  name: 'courseCategories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCharacters.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.error = payload;
    });
    //
    builder.addCase(createCharacter.pending, state => {
      state.isSubmitting = true;
    });
    builder.addCase(createCharacter.fulfilled, (state, action) => {
      const { payload } = action;
      state.isSubmitting = false;
      state.isSaved = true;
      state.data = [...state.data, payload];
    });
    builder.addCase(createCharacter.rejected, (state, action) => {
      const { payload } = action;
      state.isSubmitting = false;
      state.error = payload;
    });
    //
    builder.addCase(createCharacterVote.pending, state => {});
    builder.addCase(createCharacterVote.fulfilled, state => {});
    builder.addCase(createCharacterVote.rejected, (state, action) => {
      const { payload } = action;
      state.error = payload;
    });
  },
});

export default courseCategoriesSlice.reducer;
