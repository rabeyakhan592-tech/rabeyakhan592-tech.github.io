document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var toggle = document.getElementById('sbToggle');
  var sidebar = document.getElementById('sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    sidebar.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { sidebar.classList.remove('open'); });
    });
  }

  // Certificate gallery lightbox
  var galleryItems = document.querySelectorAll('.gallery-item img');
  if (galleryItems.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lightbox-close" type="button">✕ Close</button><img alt="">';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img');

    galleryItems.forEach(function (img) {
      img.addEventListener('click', function () {
        lbImg.src = img.getAttribute('src');
        lbImg.alt = img.getAttribute('alt') || '';
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
  }
});
