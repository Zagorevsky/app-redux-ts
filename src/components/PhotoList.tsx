import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PhotoList: React.FC = () => {
  const { page, error, loading, photos, limit } = useTypedSelector(
    (state) => state.photo
  );
  const { fetchPhotos, setFotoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchPhotos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <hr />
      <div>
        {photos.map((item) => (
          <div key={item.id} style={{ backgroundImage: `url(${item.url})`, display: "grid" }}>
            {item.id} - {item.title}
          </div>
        ))}
        <hr />
        <div style={{ display: "flex" }}>
          {pages.map((p) => (
            <div
              onClick={() => setFotoPage(p)}
              style={{
                border: p === page ? "2px solid green" : "1px solid gray",
                padding: 10,
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoList;
