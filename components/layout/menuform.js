"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
export default function MenuForm() {
  return (
    <div className="absolute bottom-0 z-10 flex flex-col gap-5 p-5 bg-background w-1/2">
      <Input
        type="email"
        label="Email"
        isRequired
        labelPlacement="outside-left"
        placeholder="Enter name of dish"
        classNames={{ mainWrapper : 'w-full'}}
        />
      <Textarea
        isRequired
        labelPlacement="outside-left"
        label="Description"
        placeholder="Enter your description"
        classNames={{ mainWrapper : 'w-full'}}
        />
      <Input
        type="text"
        labelPlacement="outside-left"
        label="Availability"
        isRequired
        placeholder="Enter availability of dish"
        classNames={{ mainWrapper : 'w-full'}}
        />
      <Input
        type="number"
        labelPlacement="outside-left"
        label="Price"
        isRequired
        placeholder="0.00"
        classNames={{ mainWrapper : 'w-full'}}
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
      <Button color="primary">Add</Button>
    </div>
  );
}
