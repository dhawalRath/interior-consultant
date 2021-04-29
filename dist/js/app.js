const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const bgModal = document.querySelector('.bg-modal');

openBtn.addEventListener('click', () => {
  bgModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  bgModal.style.display = 'none';
});