import { Metadata } from "next";
import SettingsPage from "./SettingsPage";
import { redirect } from "next/navigation";

import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings"); //this means after getting signed in it will throw user to settings page as it was trying to acess it before
  }

  return <SettingsPage user={user} />;
}
