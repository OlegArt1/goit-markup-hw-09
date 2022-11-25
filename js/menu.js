(() =>
{
    const refs =
    {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
      // body: document.querySelector('body'),
      // menuList: document.querySelector('.modal-input')
    };
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
    function toggleModal()
    {
        refs.menu.classList.toggle('is-hidden-menu');
        // refs.body.classList.toggle('no-scroll');
    }
})();
function Click_menu()
{
    var element = document.getElementsByClassName("header__mobile-menu-link");
    element.style.backgroundColor = "red";
    alert('!');
}