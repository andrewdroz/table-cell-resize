# HTML table cell collapse-expand feature

Allows a basic html table with cells that can contain multiple lines to be resizable. Table html format requires an a class of "table-cell-resizable", and <br /> tags for new lines in cells:
```
<table class="table-cell-resizable">
  <tbody>
    <td>CONTENTS_1<br />CONTENTS_2<br /></td>
  </tbody>
</table>
```