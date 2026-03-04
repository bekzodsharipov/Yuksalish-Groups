/* ========== Mobile Menu ========== */
const hamburger = document.querySelector('.hambuger__menu');
const modal = document.querySelector('.side__modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal__close');

hamburger.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

/* ========== Service "View all" Dropdown ========== */
document.querySelectorAll('.view-all-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const wrapper = btn.closest('.service__inner__wrapper');
    const dropdown = wrapper.querySelector('.service__dropdown');

    const isOpen = dropdown.classList.contains('open');

    // Toggle dropdown
    dropdown.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);

    // Update button text
    const textNode = btn.childNodes[0];
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      textNode.textContent = isOpen ? ' View all ' : ' View less ';
    }
  });
});