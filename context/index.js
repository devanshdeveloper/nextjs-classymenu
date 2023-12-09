import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { MenuContext } from "./MenuContext";

export function useAuth() {
  return useContext(AuthContext);
}
export function useMenu() {
  return useContext(MenuContext);
}
