# HTML table cell collapse-expand feature

Allows a basic html table with cells that can contain multiple lines to be resizable. Table html format requires a class of "table-cell-resizable", and `<br />` tags for new lines in cells:
```
<table class="table-cell-resizable">
  <tbody>
    <td>CONTENTS_1<br />CONTENTS_2<br /></td>
  </tbody>
</table>
```

## Two different main.js files - one using jQuery, the other purely javascript
#### Using the pure javascript file
```
<!--<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
	crossorigin="anonymous"></script>-->
<!--<script src="jquery_main.js"></script>-->
<script src="onlyJS_main.js"></script>
```
#### Using the jQuery file
```
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
  crossorigin="anonymous"></script>
<script src="jquery_main.js"></script>
<!--<script src="onlyJS_main.js"></script>-->
```
