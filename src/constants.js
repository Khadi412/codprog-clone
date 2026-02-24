
// src/constants.js
export const BASE_URL = "https://cfqrybsrfhyjsjrdsbvt.supabase.co/auth/v1/";
export const LOGIN_URL = BASE_URL + "token?grant_type=password";
export const LOGOUT_URL = BASE_URL + "logout";
export const SUPABASE_API_KEY = "your-api-key";

// Add this:
export const GET_ALL_COURSES = BASE_URL + "courses";  // adjust path if needed