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
    <Card className="w-full p-3 overflow-visible">
      <CardHeader className="justify-between">
        <h4 className="text-small font-semibold leading-none text-default-600">
          {name}
        </h4>
        <div className="flex gap-3">
          <Button onPress={handleEdit} color="primary" radius="full" size="sm">
            Edit
          </Button>
          <Button
            onPress={() =>
              currentEdit === id
                ? alert("This item is open in editor...")
                : deleteItem(id)
            }
            color="danger"
            radius="full"
            size="sm"
          >
            Delete
          </Button>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-y-visible">
        <p>{description}</p>
      </CardBody>
      <CardFooter className="justify-between">
        <div>({availability})</div>
        <div className="text-lg">{price}</div>
      </CardFooter>
    </Card>
  );
}
