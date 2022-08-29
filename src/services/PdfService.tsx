// export {};
// import React, { useRef } from 'react';
// import ReactToPrint from 'react-to-print';

// import { ComponentToPrint } from './ComponentToPrint';

// const Example = () => {
//   const componentRef = useRef();

//   return (
//     <div>
//       <ReactToPrint
//         trigger={() => <button>Print this out!</button>}
//         content={() => componentRef.current}
//       />
//       <ComponentToPrint ref={componentRef} />
//     </div>
//   );
// };

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const Example: React.FC = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef}>Hello World</div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
