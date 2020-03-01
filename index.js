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





$('.shopping-list').on('click', '.shopping-item-toggle',  e => {
    e.preventDefault();
    $(e.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
})

$('.shopping-list').on('click','.shopping-item-delete', e => {
    e.preventDefault();
    $(e.currentTarget).closest('li').remove();
})

