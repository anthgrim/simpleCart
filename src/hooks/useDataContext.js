import { useContext } from "react";
import DataContext from "../context/dataContext";

const useDataContext = () => {
  return useContext(DataContext);
};

export default useDataContext;
