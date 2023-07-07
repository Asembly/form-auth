import { SignOutButton } from "@/components/ui/Signout";
import { Loader } from "@/components/ui/loader/Loader";
import { Suspense } from "react";

export default function Signout() {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <SignOutButton />
        </Suspense>
      </div>
    </>
  )
}
