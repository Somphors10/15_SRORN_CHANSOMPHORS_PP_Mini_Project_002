"use client";
import { signUpAction } from "@/actions/signUpAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterComponent() {
  const [state, formAction] = useActionState(signUpAction, {
    success: false,
    message: null,
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success && state.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-6">
      {/* Success message */}
      {state.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {state.message}
        </div>
      )}

      {/* Error message */}
      {!state.success && state.message && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {state.message}
        </div>
      )}

      {/* username */}
      <div>
        <Label
          htmlFor="username"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <UserRound size={20} /> Username
        </Label>
        <Input
          name="username"
          type="text"
          placeholder="Please type your username"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
        />
      </div>

      {/* email */}
      <div>
        <Label
          htmlFor="email"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <Mail size={20} /> Email
        </Label>
        <Input
          name="email"
          type="email"
          placeholder="Please type your email"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
        />
      </div>

      {/* password */}
      <div>
        <Label
          htmlFor="password"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <KeyRound size={20} /> Password
        </Label>
        <Input
          name="password"
          type="password"
          placeholder="Please type your password"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
        />
      </div>

      <Button className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold">
        Sign Up
      </Button>

      <div>
        <div className="border-b border-b-light-steel-blue"></div>
        <div className="text-right mt-2 font-normal">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="hover:text-persian-green hover:underline"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="bg-ghost-white rounded-lg text-center">
        <Button className="flex gap-2 items-start justify-center w-full bg-ghost-white text-charcoal shadow-none hover:bg-ghost-white/50">
          <img src="/Google Icon.svg" alt="google icon" /> Sign in with google
        </Button>
      </div>
    </form>
  );
}