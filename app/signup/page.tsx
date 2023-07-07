import { FormSignup } from "@/components/form/auth/Signup";
import { Loader } from "@/components/ui/loader/Loader";
import { Suspense } from "react";

export default function Singup() {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <FormSignup />
        </Suspense>
      </div>
    </>
  )
}
