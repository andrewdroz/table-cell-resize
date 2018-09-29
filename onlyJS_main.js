
const tds = document.querySelectorAll('.table-cell-resizable td');

tds.forEach((td) => {
  // WRAP <td> INSIDE <div>
  const wrapperDiv = document.createElement('div');
  wrapperDiv.insertAdjacentHTML('afterbegin', td.innerHTML);
  // INDICES SHIFT EACH TIME removeChild() IS USED
  const len = td.childNodes.length;
  for (let i = 0; i < len; i += 1) {
    td.removeChild(td.firstChild);
  }
  td.insertAdjacentElement('afterbegin', wrapperDiv);

  // APPLY BUTTON ONLY TO CELLS ABOVE SPECIFIED NUM OF LINES
  if (td.querySelectorAll('br').length > 3) {
    td.insertAdjacentHTML('afterbegin', '<button class="cellResize-btn">+</button>');
    td.querySelector('button').addEventListener('click', () => {
      td.querySelector('button').closest('tr').querySelectorAll('div').forEach((div) => {
        div.classList.toggle('reduceCellHeight');
      });
      td.querySelector('button').closest('tr').querySelectorAll('button').forEach((btn) => {
        if (btn.innerHTML === '+') btn.innerHTML = '-';
        else btn.innerHTML = '+';
      });
    });
    td.querySelector('div').classList.add('reduceCellHeight');
  }
});
