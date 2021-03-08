import { ReactTextCycle } from "@jnsdls/react-text-shuffle";

export default function HomePage() {
  return (
    <div>
      <h1>
        Hello <ReactTextCycle words={["there", "visitor", "world", "friend"]} />
      </h1>
    </div>
  );
}
