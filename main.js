
$(document).ready(() => {
  // WRAP <td> INSIDE <div>
  $('.table-cell-resizable td').wrapInner('<div></div>');

  // ON-LOAD: APPLY BUTTON ONLY TO CELLS ABOVE SPECIFIED HEIGHT
  $('#myTable tr').each(function getDiv() {
    $(this)
      .find('div')
      .each(function addBtnTgglClass() {
        if ($(this).find('br').length > 3) {
          $(this).prepend('<button class="cellResize-btn">+</button>');
          $(this).toggleClass('reduceCellHeight');
        }
      });
  });

  // BUTTON CLICK HANDLER
  $('.cellResize-btn')
    .unbind()
    .click(function handlePlusMinusBtn() {
      $(this)
        .parent()
        .toggleClass('reduceCellHeight');
      if ($(this).html() === '+') {
        $(this).html('-');
      } else {
        $(this).html('+');
      }
    });
});
