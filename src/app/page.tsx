import { HydrateClient } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen w-screen flex-col bg-background px-10 text-black">
        <div className="flex flex-col gap-4 pt-16">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-8xl font-extrabold tracking-tighter">
                Learn without limits.
              </h1>
              <p className="text-2xl font-semibold">
                Study new subjects & skills, and have fun doing it.
              </p>
            </div>

            <Button>
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
