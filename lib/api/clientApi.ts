import { Credentials, User } from "@/types/user";
import { nextServer } from "./api";

export const register = async (credentials: Credentials) => {
  const { data } = await nextServer.post<User>("/auth/register", credentials);
  return data;
};

export const login = async (credentials: Credentials) => {
  const { data } = await nextServer.post<User>("/auth/login", credentials);
  return data;
};

export const logout = async () => {
  await nextServer.post<User>("/auth/logout");
};

interface SessionStatus {
  success: boolean;
}

export const checkSession = async () => {
  const { data } = await nextServer.get<SessionStatus>("/auth/session");
  return data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>("/users/me");
  return data;
};
