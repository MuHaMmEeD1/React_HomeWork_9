import React, { createContext, useContext, useEffect, useState } from "react";
import { FilimType } from "../types";
import axios from "axios";

type FilimContextType = {
  filims: FilimType[];
  changeFilims: (filimName: string) => void;
  getFilim: (Id: string) => FilimType;
};

const FilimContext = createContext({} as FilimContextType);

export const useFilims = () => {
  return useContext(FilimContext);
};

interface Props {
  children: React.ReactNode;
}

const FilimProvider: React.FC<Props> = ({ children }) => {
  const [filims, setFilims] = useState<FilimType[]>([]);

  useEffect(() => {
    changeFilims("");
  }, []);

  const changeFilims = async (filimName: string) => {
    let responce = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "d9c93346",
        s: filimName == "" ? "Batman" : filimName,
      },
    });
    console.dir(responce.data.Search);
    setFilims(responce.data.Search);
  };

  const getFilim = (id: string) => {
    let checkIndex = -1;

    filims.forEach((f, i) => {
      if (":" + f.imdbID === id) {
        checkIndex = i;
      }
    });

    return filims[checkIndex];
  };

  return (
    <FilimContext.Provider value={{ filims, changeFilims, getFilim }}>
      {children}
    </FilimContext.Provider>
  );
};

export default FilimProvider;
