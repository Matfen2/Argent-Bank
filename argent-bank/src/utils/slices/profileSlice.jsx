import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token || localStorage.getItem("token"); // Vérifie le token

    if (!token) return rejectWithValue("Aucun token trouvé");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {}, // Certaines API nécessitent un body vide
        {
          headers: {
            Authorization: `Bearer ${token}`, // Envoi du token dans les headers
          },
        }
      );
      return response.data.body; // Récupération du profil
    } catch (error) {
      return rejectWithValue(error.response?.data || "Erreur serveur");
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { firstName, lastName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.body; // Retourne le profil mis à jour
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    status: "idle",
    error: null,
  },
  reducers: {
    resetUserProfile: (state) => {
      state.profile = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { resetUserProfile } = profileSlice.actions;
export default profileSlice.reducer;