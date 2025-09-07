"use client";
import { useRouter } from "next/navigation";
import css from "./SignUpPage.module.css";
import { useState } from "react";
import { useAuthStore } from "@/lib/store/authStore";
import { Credentials } from "@/types/user";
import { register } from "@/lib/api/clientApi";
import { ApiError } from "next/dist/server/api-utils";

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const handleSubmit = async (formData: FormData) => {
    try {
      const values = Object.fromEntries(formData) as unknown as Credentials;
      const user = await register(values);
      if (user) {
        setUser(user);
        router.push("/profile");
      }
    } catch (error) {
      setError((error as ApiError).message ?? "Something went wrong");
    }
  };

  return (
    <>
      <main className={css.mainContent}>
        <h1 className={css.formTitle}>Sign up</h1>
        <form action={handleSubmit} className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className={css.input}
              required
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className={css.input}
              required
            />
          </div>

          <div className={css.actions}>
            <button type="submit" className={css.submitButton}>
              Register
            </button>
          </div>
          {error && <p className={css.error}>{error}</p>}
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
