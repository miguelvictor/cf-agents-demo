import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_index";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CF Agents Demo" },
    { name: "description", content: "CF Agents Demo" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <main className="p-20">
      <h1 className="text-4xl font-medium tracking-tight">CF Agents Demo</h1>
      <Button className="mt-8" onClick={() => setCount((count) => count + 1)}>
        Click me
      </Button>
      {count > 0 && <p className="mt-4">You clicked {count} times</p>}
    </main>
  );
}
