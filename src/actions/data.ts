import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk<API.DataModel>(
  "data/fetchData",
  async () => {
    const response = await fetch("/data.json");
    const json = await response.json();

    return json;
  }
);
