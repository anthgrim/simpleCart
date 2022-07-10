import products from "../data/db";
import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(products);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataContext;
