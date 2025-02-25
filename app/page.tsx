import Image from "next/image";
import Link from "next/link";
import { page_routes } from "../lib/routes-config";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl"> Contextual Teaching and Learning Practices</h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">A contextual based teaching and learning practice that helps teachers connect content to real world situations and helps students to connect content to their lives </p>
      <div className="flex flex-row items-center gap-5">
        <Link href={`/docs${page_routes[0].href}`}
        >
          Learn More
        </Link>
        <Link href="/resources" className={buttonVariants({ variant: "secondary", className:"px-6", size: "lg" })}>
          References
        </Link>
      </div>
    </div>
  );
}
