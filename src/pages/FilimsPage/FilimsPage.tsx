import { useNavigate } from "react-router-dom";
import { useFilims } from "../../contexts/FilimContext";
import { FilimForm, FilimUlComponent } from "./styles";
import { FormEvent, useState } from "react";

const FilimsPage = () => {
  const { filims } = useFilims();
  const { changeFilims } = useFilims();
  const navigate = useNavigate();
  const [filimIdInput, setFimimIdInput] = useState("");

  const searchButtonEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changeFilims(filimIdInput);
  };

  return (
    <div>
      <FilimForm onSubmit={searchButtonEvent}>
        <input
          type="text"
          value={filimIdInput}
          onChange={(e) => {
            setFimimIdInput(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </FilimForm>
      <FilimUlComponent>
        {filims.map((f, i) => {
          return (
            <li
              onClick={() => {
                navigate(`/Filims/:${f.imdbID}`);
              }}
              key={f.imdbID}
            >
              <img src={f.Poster} alt="Poster" />
              <p>{f.Title}</p>
            </li>
          );
        })}
      </FilimUlComponent>
    </div>
  );
};

export default FilimsPage;
