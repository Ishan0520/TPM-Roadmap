// Show "Back to Top" button when scrolling
window.onscroll = function() {
  document.getElementById('back-to-top').style.display =
    (window.scrollY > 400) ? 'inline-block' : 'none';
};
document.getElementById('back-to-top').onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
