import Link from "next/link";
import css from "./ProfilePage.module.css";
import { Metadata } from "next";
import Image from "next/image";

const title = "Profile Page";
const description = "NoteHub profile page";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://notehub.com/",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["https://ac.goit.global/fullstack/react/og-meta.jpg"],
  },
};

const Profile = () => {
  return (
    <div>
      <main className={css.mainContent}>
        <div className={css.profileCard}>
          <div className={css.header}>
            <h1 className={css.formTitle}>Profile Page</h1>
            <Link href="" className={css.editProfileButton}>
              Edit Profile
            </Link>
          </div>
          <div className={css.avatarWrapper}>
            <Image
              src="/"
              alt="User Avatar"
              width={120}
              height={120}
              className={css.avatar}
            />
          </div>
          <div className={css.profileInfo}>
            <p>Username: your_username</p>
            <p>Email: your_email@example.com</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
