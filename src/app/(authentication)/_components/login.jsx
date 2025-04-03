"use client";
import { useActionState } from "react"; // Changed from useFormState
import { signInAction } from "@/actions/signInAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function SubmitButton({ isPending }) { 
  return (
    <Button
      type="submit"
      disabled={isPending}
      className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold hover:bg-persian-green/90 disabled:opacity-75"
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Login"
      )}
    </Button>
  );
}

export default function LoginComponent() {
  const [state, formAction, isPending] = useActionState(signInAction, {
    success: false,
    message: null,
  });
  
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push(state.redirectTo || "/dashboard");
    }
  }, [state.success, state.redirectTo, router]);

  return (
    <form action={formAction} className="space-y-6 bg-white">
      {/* Error message */}
      {state.message && (
        <div className="text-watermelon-red text-sm text-center p-2 rounded-lg bg-watermelon-red/10">
          {state.message}
        </div>
      )}

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
          required
          placeholder="Please type your email"
          className="bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90"
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
          required
          placeholder="Please type your password"
          className="bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90"
        />
      </div>

      {/* sign in button */}
      <SubmitButton isPending={isPending} />

      {/* underline */}
      <div>
        <div className="border-b border-b-light-steel-blue"></div>
        <div className="capitalize text-right mt-2 font-normal">
          create new account?{" "}
          <Link
            href={"/register"}
            className="hover:text-persian-green hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* sign in with google */}
      <div className="bg-ghost-white rounded-lg text-center">
        <Button
          type="button"
          className="flex gap-2 items-start justify-center w-full bg-ghost-white text-charcoal shadow-none hover:bg-ghost-white/50"
        >
          <img src="/Google Icon.svg" alt="google icon" /> Login with google
        </Button>
      </div>
    </form>
  );
}