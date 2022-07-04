import { Feed } from "../componentes/Feed";
import { Header } from "../componentes/Header";
import { Sidebar } from "../componentes/Sidebar";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex  flex-1">
        <Feed />
        <Sidebar />
      </main>
    </div>
  );
}
