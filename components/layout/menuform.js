"use client";
import { useMenu } from "@/context";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
export default function MenuForm() {
  const { addItem, currentEdit, setFormData, formData, editItem, clearForm } =
    useMenu();

  function handleSubmit(e) {
    if (
      !formData.name ||
      !formData.description ||
      !formData.availability ||
      !formData.price
    ) {
      alert("Invalid Data");
      return;
    }
    const item = {
      name: formData.name,
      description: formData.description,
      availability: formData.availability,
      price: `$${formData.price}`,
    };
    currentEdit ? editItem(item) : addItem(item);
  }

  return (
    <form className="absolute bottom-0 z-10 flex flex-col gap-5 p-5 bg-background w-[60%] border-t-1 borfer-gray-200 dark:border-gray-800">
      <div className="text-bold text-xs">
        {currentEdit ? `Edit : ${currentEdit}` : "New Item"}
      </div>
      <Input
        type="name"
        label="Name"
        isRequired
        labelPlacement="outside-left"
        placeholder="Enter name of dish"
        value={formData.name}
        onValueChange={(value) => setFormData({ ...formData, name: value })}
        classNames={{ mainWrapper: "w-full" }}
      />
      <Textarea
        isRequired
        labelPlacement="outside-left"
        label="Description"
        placeholder="Enter your description"
        classNames={{ mainWrapper: "w-full" }}
        value={formData.description}
        onValueChange={(value) =>
          setFormData({ ...formData, description: value })
        }
      />
      <Autocomplete
        allowsCustomValue
        label="Availability"
        inputProps={{
          classNames: {
            mainWrapper: "w-full",
          },
        }}
        defaultItems={[
          "Always",
          "Only for Dinner",
          "Only for Lunch",
          "Only Saturday",
          "Only Sunday",
        ].map((e) => ({ value: e, label: e }))}
        labelPlacement="outside-left"
        isRequired
        selectedKey={formData.availability}
        onSelectionChange={(value) =>
          setFormData({ ...formData, availability: value })
        }
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>

      {/* <Input
        type="text"
        labelPlacement="outside-left"
        label="Availability"
        isRequired
        placeholder="Enter availability of dish"
        classNames={{ mainWrapper: "w-full" }}
        value={formData.availability}
        onValueChange={(value) =>
          setFormData({ ...formData, availability: value })
        }
      /> */}
      <Input
        type="number"
        labelPlacement="outside-left"
        label="Price"
        isRequired
        placeholder="0.00"
        classNames={{ mainWrapper: "w-full" }}
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
        value={formData.price}
        onValueChange={(value) => setFormData({ ...formData, price: value })}
      />
      <div className="flex justify-between">
        <Button onPress={clearForm} color="default">
          Clear
        </Button>
        <Button onPress={handleSubmit} color="primary">
          {currentEdit ? "Edit" : "Add"}
        </Button>
      </div>
    </form>
  );
}
