import { FormSignin } from "@/components/form/auth/Signin";
import { Loader } from "@/components/ui/loader/Loader";
import { Suspense } from "react";

export default function SignIn() {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <FormSignin />
        </Suspense>
      </div>
    </>
  )
}
