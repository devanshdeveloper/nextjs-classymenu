import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function MenuItem({
  name,
  availability,
  description,
  price,
  id,
}) {
  // const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="w-full p-3 h-[200px] overflow-visible">
      <CardHeader className="justify-between">
        <h4 className="text-small font-semibold leading-none text-default-600">
          {name}
        </h4>
        <div className="flex gap-3">
          <Button
            color="primary"
            radius="full"
            size="sm"
          >
            Edit
          </Button>
          <Button color="danger" radius="full" size="sm">
            Delete
          </Button>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{description}</p>
      </CardBody>
      <CardFooter className="justify-between">
          <div>{availability}</div>
          <div className="text-lg">{price}</div>
      </CardFooter>
    </Card>
  );
}

// "use client";

// import { Button } from "@nextui-org/react";

// export default function MenuItem({
//   name,
//   availability,
//   description,
//   price,
//   id,
// }) {
//   return (
//     <div className="w-[600px] dark:text-white">
//       <div className="bg-white dark:bg-gray-800 p-3 flex flex-col gap-3 rounded-lg">
//         <div className="flex justify-between">
//           <div className="text-xl text-bold">{name}</div>
//           <div className="text-red-600">{`${availability}`}</div>
//         </div>
//         <div>{description}</div>
//         <div className="text-right text-xl">{price}</div>
//       </div>
//       <div className="flex justify-between mt-2">
//         <div className="flex gap-2">
//           {[
//             {
//               text: "Edit",
//               onPress: () => {},
//             },
//             { text: "Up" },
//             { text: "Down" },
//             { text: "Merge" },
//             { text: "Copy" },
//             { text: "Undo" },
//           ].map((itemControl, i) => (
//             <Button
//               key={i}
//               onClick={itemControl.onPress}
//               className="bg-white dark:bg-gray-800"
//             >
//               {itemControl.text}
//             </Button>
//           ))}
//         </div>
//         <div className="flex">
//           {[
//             // { text: "Save" }
//           , { text: "Delete", onPress: () => {} }].map(
//             (itemControl, i) => (
//               <Button
//                 key={i}
//                 onClick={itemControl.onPress}
//                 className="bg-white dark:bg-gray-800"
//               >
//                 {itemControl.text}
//               </Button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // function MenuItem({ name, availability, description, price, id }) {
// //   return (
// //     <div className="item-container">
// //       <div className="item-body">
// //         <div className="item-head">
// //           <h4 className="item-heading">{name}</h4>
// //           <span className="item-availability">({availability})</span>
// //         </div>
// //         <div className="item-description">
// //           <p>{description}</p>
// //           <div className="item-price">{price}</div>
// //         </div>
// //       </div>
// //       <div className="item-controls">
// //         <div>
// //           {[
// //             {
// //               text: "Edit",
// //               onPress: () => {},
// //             },
// //             { text: "Up" },
// //             { text: "Down" },
// //             { text: "Merge" },
// //             { text: "Copy" },
// //             { text: "Undo" },
// //           ].map((itemControl, i) => (
// //             <button
// //               key={i}
// //               onClick={itemControl.onPress}
// //               className="btn btn-control"
// //             >
// //               {itemControl.text}
// //             </button>
// //           ))}
// //         </div>
// //         <div>
// //           {[{ text: "Save" }, { text: "Delete", onPress: () => {} }].map(
// //             (itemControl, i) => (
// //               <button
// //                 key={i}
// //                 onClick={itemControl.onPress}
// //                 className="btn btn-control"
// //               >
// //                 {itemControl.text}
// //               </button>
// //             )
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MenuItem;
