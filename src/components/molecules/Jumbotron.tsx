import { useQuery } from "@tanstack/react-query";
import { Button } from "../atom";
import { fetchData } from "../../hooks/api";
import { IPlaylist } from "../../types";

export function Jumbotron() {
  const { data } = useQuery<IPlaylist>({
    queryKey: ["playlist"],
    queryFn: fetchData,
  });

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
              {data?.data[0]?.title}
            </h1>
            <p className="mb-5 text-lg sm:text-xl ">
              {data?.data[0]?.description}
            </p>
            {data?.data[0] && (
              <div className="mx-auto sm:max-w-sm">
                <Button text="Get started" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
