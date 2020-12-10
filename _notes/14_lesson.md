#14. Lesson 
##css-модули, css-modules
###Разбиваем css на блоки
Header.module.css
```
.header{
    grid-area: header;
    background-color: #ddfdcb;
    padding: 10px;
}
```

Header.jsx
```
import React from "react";
import stl from "./Header.module.css";

const Header = () => {
    return <header className={stl.header}> </header>
}

export default Header;
```

### Как добавить два класса в один тег
В  ECMAScript6 появились шаблонные строки

Вот от них и пляшем

для примера, как это работает:
```
let stl = {
    'nav': 'Navbar_nav_3ds9S',
    'item': 'Navbar_item__4ds9C',
    'active': 'Navbar_active__5sd1Q'
}
```
```
let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${stl.item} ${stl.active}`;
```
```
<div className = {`${stl.item} ${stl.active}`}>
    <p> some text </p>
</div>
```

