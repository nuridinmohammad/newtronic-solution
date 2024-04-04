import { ReferenceItem } from "../../types";

export function PlaylistItem({ item }: { item: ReferenceItem }) {
  const downloadImage = (url: string) => {
    fetch(url)
      .then((response) => {
        console.log("Response status:", response.status);
        return response.blob();
      })
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const a_tag = document.createElement("a");
        a_tag.href = blobURL;
        a_tag.setAttribute("download", fileName as string);
        document.body.appendChild(a_tag);
        a_tag.click();
        a_tag.remove();
      })
      .catch((err) => console.error("Error downloading image:", err));
  };

  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          {item.type === "image" ? (
            <>
              <img src={item?.url} alt="Shoes" />
            </>
          ) : (
            <>
              <video width="100%" controls>
                <source src={item.url} type="video/mp4" />
                <source src={item.url} type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end py-3">
            {/* <Button text={"Download"} onClick={() => downloadImage(item.url)} /> */}
            <button
              onClick={() => downloadImage(item.url)}
              className="btn btn-primary w-full rounded-full"
            >
              Dowload
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
