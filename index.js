$('#js-shopping-list-form').on('submit', e => {
e.preventDefault();
const input = $('#shopping-list-entry').val();
$('#js-shopping-list-form').trigger('reset');
return addItem(input);
}
)


function addItem(inputValue){
    const newItem = `<li>
    <span class="shopping-item">${inputValue}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`

  $('.shopping-list').append(newItem);
}





$('.shopping-item-toggle').on('click', e => {
    e.preventDefault();
    $(event.currentTarget).closest('li').toggleClass('shopping-item__checked');
})

$('.shopping-item-delete').on('click', e => {
    e.preventDefault();
    $(event.currentTarget).closest('li').remove();
})

