"use client"
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-10 m-4">

     <h1>Home page content</h1>
    </div>

  );
}
