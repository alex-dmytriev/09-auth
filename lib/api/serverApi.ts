import { cookies } from "next/headers";
import { nextServer } from "./api";
import { User } from "@/types/user";

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const response = await nextServer.get("/auth/session", {
    headers: { Cookie: cookieStore.toString() },
  });
  return response;
};

//TODO: Add fetchNotes and fetchNotesById on server here

export const getMeServer = async () => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<User>("/users/me", {
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
};
