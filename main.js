
$(document).ready(() => {
  // WRAP <td> INSIDE <div>
  $('.table-cell-resizable td').wrapInner('<div></div>');

  // ON-LOAD: APPLY BUTTON ONLY TO CELLS ABOVE SPECIFIED HEIGHT
  $('#myTable div').each(function addBtnTgglClass() {
    if ($(this).find('br').length > 3) {
      $(this).prepend('<button class="cellResize-btn">+</button>');
      $(this).toggleClass('reduceCellHeight');
    }
  });

  // BUTTON CLICK HANDLER
  $('.cellResize-btn')
    .unbind()
    .click(function handlePlusMinusBtn() {
      const $rowInQuestion = $(this).closest('tr');

      $rowInQuestion
        .find('div')
        .toggleClass('reduceCellHeight');

      $rowInQuestion
        .find('button')
        .each(function switchBtnSign() {
          if ($(this).html() === '+') {
            $(this).html('-');
          } else {
            $(this).html('+');
          }
        });
    });
});
