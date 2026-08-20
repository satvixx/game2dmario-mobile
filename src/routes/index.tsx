import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Red Square Adventure — HTML5 Canvas Platformer" },
      {
        name: "description",
        content:
          "Jump across platforms, dodge the orange enemy, collect 10 coins and reach the golden flag in this browser platformer.",
      },
      { property: "og:title", content: "Red Square Adventure — Canvas Platformer" },
      {
        property: "og:description",
        content:
          "Arrow keys to move, spacebar to jump. Collect coins, avoid the enemy, grab the flag to win.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen w-full bg-[#1b2430]">
      <h1 className="sr-only">Red Square Adventure — HTML5 canvas platformer game</h1>
      <iframe
        src="/game.html"
        title="Red Square Adventure game"
        className="h-screen w-full border-0"
      />
    </main>
  );
}
