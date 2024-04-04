import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Playlist from "./components/organisms/Playlist";
// import "node_modules/video-react/dist/video-react.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Playlist />
      </QueryClientProvider>
    </main>
  );
}
