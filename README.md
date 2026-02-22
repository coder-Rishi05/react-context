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
themeContext.js
import { createContext } from "react";

const ThemeContext = createContext()
```
```jsx
// app.jsx
// yhan value pass krna must hai and also jo hmari default value hoti hai vo overrite ho jaati hai.
<ThemeContext.provider value="theme" >
    now ab yhan jo bhi components honge mai vhan theme ki value ko acess kr skta hun
    <Home />
</ThemeContext.provider>


```
- to use we can now use the useContext function
```jsx
// Home.jsx

const a = useContext(theme)
console.log(a)
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
const ThemeProvider = ()=>{
return (
    <ThemeProvider.provider value={{}}>
    </ThemeProvider.provider>
)
}
```