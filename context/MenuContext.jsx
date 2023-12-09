import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import data from "../public/data.json";
import {
  addItemToObject,
  deleteItemFromObject,
  editIemToObject,
} from "../utils/json-utils";
// import { writeToFile } from "../utils/filesystem";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  // const [saveFile, setSaveFile] = useState(null);
  const [menuData, setMenuData] = useLocalStorage("menuData", data);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [currentSection, setCurrentSection] = useState("Poultry");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    availability: "",
  });

  // useEffect(() => {
  //   if (!saveFile || !menuData) return;
  //   writeToFile(saveFile, menuData);
  // }, [menuData, saveFile]);

  function clearForm() {
    setCurrentEdit(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      availability: "",
    });
  }

  return (
    <MenuContext.Provider
      value={{
        // setSaveFile,
        menuData,
        setMenuData,
        // saveFile,
        currentEdit,
        formData,
        setFormData,
        currentSection,
        setCurrentEdit,
        setCurrentSection,
        clearForm,
        addItem(item) {
          const newMenuData = addItemToObject(menuData, item);
          setMenuData(newMenuData);
          clearForm();
        },
        editItem(newItem) {
          const newMenuData = editIemToObject(menuData, currentEdit, newItem);
          setMenuData(newMenuData);
          clearForm();
        },
        deleteItem(id) {
          const newMenuData = deleteItemFromObject(menuData, id);
          setMenuData(newMenuData);
        },
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
