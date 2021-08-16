// ================ Action menu Porfile =====================
let profileImage = document.getElementById('profile-image');
let profileMenu = document.getElementById('profile-menu');

profileImage.addEventListener('click', () => {
    if (profileMenu.classList.contains('show-box')) {
        profileMenu.classList.remove('show-box')
    } else {
        profileMenu.classList.add('show-box')
    }
});

// ================ Action Menu Responsive ================
let buttonHamburguer = document.getElementById('buttonHamburguer');
let buttonClose = document.getElementById('buttonCloseSidebar');
let sidebar = document.getElementById('sidebar');
let header = document.getElementById('header');

buttonHamburguer.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar');
});

buttonClose.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});