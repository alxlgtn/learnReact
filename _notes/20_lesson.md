#20. Lesson

##NavLink

###Переход по ссылкам без перезагрузки страницы

Вместо тега ```<a>``` пишем реактовский тег ```<NavLink>```  
Синтаксис такой

До
```
<a href="/link.html" class="item active">
    link text
</a>    
```
После
```
<NavLink className={stl.item} to="/link " activeClassName={stl.active} >
    link text
</NavLink>
```
***
#### *!!! По теме*
* addEventListener - подмена пути
* History API html5  
* PreventDefault

***
***




