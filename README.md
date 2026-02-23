# V- Card + context api

# prop drilling

passing props from parent to child

# context

- creating context

context create krne ke liye react hme createContext provide krata hai

isko hm directly use nhi kr skte isko use krne ke liye hme ek or hook chahiye hota hai useContext.

or isko use krne ke liye pehle provider se warp krna pdta hai then ek value pass krni pdti hai

ex:

```js
themeContext.js;
import { createContext } from "react";

const ThemeContext = createContext();
```

```jsx
// app.jsx
// yhan value pass krna must hai and also jo hmari default value hoti hai vo overrite ho jaati hai.
<ThemeContext.provider value="theme">
  now ab yhan jo bhi components honge mai vhan theme ki value ko acess kr skta
  hun
  <Home />
</ThemeContext.provider>
```

- to use we can now use the useContext function

```jsx
// Home.jsx

const a = useContext(theme);
console.log(a);
```

or hm value me state ko bhi pass kr skte han dark and light mode ke liye

---

jb bhi hm context create krte han to vo component bnta hai isliye variable ka firstname hmesha caoital hoga

<!-- 1st step -->

```js
const ThemeContext = createContext();
```

<!-- 2nd step -->

then create provider component

```js
const ThemeProvider = () => {
  return <ThemeProvider.provider value={{}}></ThemeProvider.provider>;
};
```

---

```jsx
ThemeContext.jsx;
import { Children, createContext } from "react";

export const ThemeContext = createContext();

// provider

export const ThemeProvider = ({ children }) => {
  const theme = "dark";
  console.log(children);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
```

```jsx
App.jsx;

import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-full flex item-center justify-center bg-pink-200 h-screen">
        <Card />
      </div>
    </ThemeProvider>
  );
};

export default App;
```

using

```js
const themes = useContext(ThemeContext);
console.log(themes);
```

---

### implementing dark mode

- create a context
- create a provider
- wrap all the components with provider
- then inside provider wrap childrens with context and value
- then useContext(context) to use the context

---

# useEffect

jb mai direct api call krta hun kisi component me and useState me uski value set krta hun to vo lgater call krta rheta hai api ko ye basically recursion state me phas jaata hai.

```js
import React, { useState } from "react";

const UserProfile = () => {
  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState([]);

  const api = async () => {
    const data = await fetch("https://api.github.com/users");
    const jsonData = await data.json();
    setData(jsonData);
    console.log("hello");
    // setPhoto(jsonData[0].avatar_url);
  };
  //   api()

  return (
    <div className="w-full h-full py-4 bg-zinc-900 flex  items-center justify-center flex-col gap-10">
      <h1 className="text-3xl  font-mono font-bold text-zinc-200">
        Github users
      </h1>
      <div className="flex  items-center flex-wrap justify-center gap-10  ">
        {data.map((data, index) => (
          <div key={index} className="profileCard w-60  rounded-xl border-2">
            <img
              className="w-full object-cover object-center"
              src={data.avatar_url}
              alt=""
            />
          </div>
        ))}
      </div>
      <button
        className="px-3 py-2 bg-green-400 rounded-full text-white font-bold cursor-pointer "
        onClick={() => api()}
      >
        Get data
      </button>
    </div>
  );
};

export default UserProfile;
```

isliye hm useEffect use krte han

- useEffect hook side me run hota hai jb poora component load ho jaata hai uske baad vo api wale code ko execute krta hai
- ye bas ek baar render hota hai ek baar hi chalta hai render hone pe agr empty aaray diya hai to

- agr hm direct state value me api data set krte han to ye bs khudko hi call krte rh jaata hai kyonki jitni bar bhi data aaega api state ki value change hogi and data update hoga. and dubara rerender hoga and agin function call hoga.

- ye ek infinite loop create kr dega isliye hm is process ko rokne ke liye useEffect hook use krte han.

- UseEffect ke 3 state hote han isko sideeffect hook bhi khte han.
  ye usi time execute nhi hota last me hota hai.

---

- without dependency array
```js
useEffect(() => {});
```

- hr baar call hoga normal function ki tarah

- with empty array and value
```js
useEffect(()=>{},[var])
```


- with empty array
- bs ek hi baar render hoga dubara nhi chalega

```js
useEffect(() => {}, []);
```
