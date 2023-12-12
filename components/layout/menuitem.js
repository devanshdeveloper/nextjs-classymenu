"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useMenu } from "@/context";
import { getItemById } from "@/utils/json-utils";

export default function MenuItem({
  name,
  availability,
  description,
  price,
  id,
}) {
  const { setCurrentEdit, setFormData, menuData, deleteItem, currentEdit } =
    useMenu();
  function handleEdit() {
    const currentData = getItemById(menuData, id);
    if (!currentData) return;
    setCurrentEdit(id);
    setFormData({
      name: currentData.name,
      description: currentData.description,
      price: +currentData.price.substring(1),
      availability,
    });
  }

  return (
    <Card className="w-full p-3 overflow-visible rounded-none bg-background">
      <CardHeader className="justify-between">
        <h4 className="text-small font-semibold leading-none text-default-600">
          {name}
        </h4>
        <div>({availability})</div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-y-visible">
        <p>{description}</p>
      </CardBody>
      <CardFooter className="justify-end">
        <div className="text-lg">{price}</div>
      </CardFooter>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {[
            {
              text: "Edit",
              onPress: () => handleEdit(id),
            },
            { text: "Up" },
            { text: "Down" },
            { text: "Merge" },
            { text: "Copy" },
            { text: "Undo" },
          ].map((itemControl, i) => (
            <Button
              className="rounded-lg"
              onPress={itemControl.onPress}
              color={itemControl.color || "primary"}
              radius="full"
              size="sm"
            >
              {itemControl.text}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          {[
            { text: "Save" },
            {
              text: "Delete",
              onPress: () =>
                currentEdit === id
                  ? alert("this is open in from. clear the form to delete...")
                  : deleteItem(id),
              color: "danger",
            },
          ].map((itemControl, i) => (
            <Button
              className="rounded-lg"
              onPress={itemControl.onPress}
              color={itemControl.color || "primary"}
              radius="full"
              size="sm"
            >
              {itemControl.text}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
