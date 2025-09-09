{
  let background = document.getElementsByClassName('background-image')[0].querySelector('img');
  background.style.top = `-${window.scrollY / 8}px`;

  window.addEventListener('scroll', (_) => {
    background.style.top = `-${window.scrollY / 8}px`;
  });
}
