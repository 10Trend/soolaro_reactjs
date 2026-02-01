import { axios } from "../axios";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  // Add other user fields as needed
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  message?: string;
}

/**
 * Login user
 */
export const login = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const { data } = await axios.post<AuthResponse>("/login", credentials);
  return data;
};

/**
 * Register new user
 */
export const register = async (
  registerData: RegisterData,
): Promise<AuthResponse> => {
  const { data } = await axios.post<AuthResponse>("/register", registerData);
  return data;
};

/**
 * Logout user
 */
export const logout = async (): Promise<void> => {
  await axios.post("/logout");
};

/**
 * Get current user data
 */
export const getCurrentUser = async (): Promise<{ user: User }> => {
  const { data } = await axios.get<{ user: User }>("/user");
  return data;
};

/**
 * Request password reset
 */
export const forgotPassword = async (email: string): Promise<void> => {
  await axios.post("/forgot-password", { email });
};

/**
 * Reset password
 */
export const resetPassword = async (data: {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}): Promise<void> => {
  await axios.post("/reset-password", data);
};

/**
 * Verify OTP
 */
export const verifyOtp = async (data: {
  email: string;
  otp: string;
}): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>("/verify-otp", data);
  return response.data;
};

/**
 * Resend OTP
 */
export const resendOtp = async (email: string): Promise<void> => {
  await axios.post("/resend-otp", { email });
};
