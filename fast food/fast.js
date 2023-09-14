// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add click event listeners to toggle item details
menuItems.forEach(item => {
    const title = item.querySelector('.item-title');
    const description = item.querySelector('.item-description');
    const price = item.querySelector('.item-price');

    item.addEventListener('click', () => {
        description.classList.toggle('show');
        price.classList.toggle('show');
    });
});