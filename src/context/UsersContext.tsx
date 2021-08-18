import { createContext } from "react";
import UserType from "types";

interface IContextProps {
  users: UserType[];
  setUsers: Function;
}

const UsersContext = createContext({} as IContextProps);

export default UsersContext;
