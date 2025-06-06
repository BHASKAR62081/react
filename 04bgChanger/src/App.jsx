// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <div
//       className="w-full h-screen duration-200"
//       style={{ backgroundColor: color }}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//             onClick={() => setColor("red")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "red" }}
//           >
//             Red
//           </button>
//           <button
//             onClick={() => setColor("green")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "green" }}
//           >
//             Green
//           </button>
//           <button
//             onClick={() => setColor("blue")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "blue" }}
//           >
//             Blue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//              OR

import { useState } from "react";

// Reusable Button Component
function ColorButton({ color, colorChange }) {
  return (
    <button
      onClick={() => colorChange(color)}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

function App() {
  const [color, setColor] = useState("olive");

  const colorChange = (newColor) => {
    setColor(newColor);
    //document.body.style.bgColor = newColor; // Optional DOM-level change
  };

  const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((c) => (
            <ColorButton key={c} color={c} colorChange={colorChange} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
