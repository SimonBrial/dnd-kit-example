import KanbanBoard from "./prueba/KanbanBoard";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function Home() {
  return (
    <MantineProvider>
      <main className="h-screen bg-white">
        <KanbanBoard />
      </main>
    </MantineProvider>
  );
}
