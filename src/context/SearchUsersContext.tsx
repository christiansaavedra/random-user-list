import { createContext } from "react";
import UserType from "types";

interface IContextProps {
  searchedUsers: UserType[];
  setSearchedUsers: Function;
}

const SearchUsersContext = createContext({} as IContextProps);

export default SearchUsersContext;
