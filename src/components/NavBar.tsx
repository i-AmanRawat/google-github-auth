import Link from "next/link";

import UserButton from "@/components/UserButton";
import getSession from "@/lib/getSession";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

export default async function NavBar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth v5 Tutorial
        </Link>
        {user ? <UserButton user={user} /> : <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
      className=""
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
