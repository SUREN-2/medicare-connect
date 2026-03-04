import { GalleryVerticalEnd } from "lucide-react";

import { SignupForm } from "@/components/signup-form";
import { IconHeartHandshake } from "@tabler/icons-react";

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6 items-center">
        <div className="flex items-center">
          <IconHeartHandshake className="w-8 h-8 text-brand-clr" />

          {/* testing */}

          <a
            href="#"
            className="flex items-center gap-2 self-center font-xl text-2xl font-bold font-sans text-brand-clr"
          >
            MediCare Connect
          </a>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
