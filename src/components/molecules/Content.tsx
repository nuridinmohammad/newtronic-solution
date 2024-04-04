import { useQuery } from "@tanstack/react-query";
import { PlaylistItem } from "../atom/PlaylistItem";
import { fetchData } from "../../hooks/api";
import { Loading } from "../atom/Loading";
import { IPlaylist } from "../../types";

export function Content() {
  const { data } = useQuery<IPlaylist>({
    queryKey: ["playlist"],
    queryFn: fetchData,
  });
  console.log(data?.data[0]?.playlist);

  return (
    <div className="bg-warning flex flex-col gap-3 sm:gap-10 p-3 sm:px-20 sm:py-10 md:px-28 lg:flex-row justify-center h-auto">
      {data?.data[0]?.playlist ? (
        data?.data[0]?.playlist.map((item) => {
          return <PlaylistItem item={item} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
