import React from "react";

const Sum = React.memo(({ number }) => {
  function sum() {
    let add = 0;
    for (let i = 0; i < number; i++) {
      add = add + i;
    }
    return add;
  }
  const total = sum();
  console.log("child re render")
  return <div>total sum : {total}</div>;

});

export default Sum;
