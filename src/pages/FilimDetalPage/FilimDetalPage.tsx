import { useParams, useSearchParams } from "react-router-dom";
import { useFilims } from "../../contexts/FilimContext";
import { useEffect, useState } from "react";
import { FilimType } from "../../types";
import { FilimDetalDiv } from "./styles";

const FilimDetalPage = () => {
  const params = useParams();

  const { getFilim } = useFilims();
  const [filim, setFilim] = useState<FilimType>();

  const getFilimAsync = async () => {
    setFilim(await getFilim(params.FilimId as string));
  };

  useEffect(() => {
    getFilimAsync();
  }, []);

  return (
    <FilimDetalDiv>
      <img src={filim?.Poster} alt="Poster" />
      <div>
        <div>
          <p>{filim?.Title}</p>
          <p>{filim?.Type}</p>
        </div>
        <p>{filim?.Year}</p>
      </div>
    </FilimDetalDiv>
  );
};

export default FilimDetalPage;
