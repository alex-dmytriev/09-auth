import { cookies } from "next/headers";
import { nextServer } from "./api";

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const response = await nextServer.get("/auth/session", {
    headers: { Cookie: cookieStore.toString() },
  });
  return response;
};
