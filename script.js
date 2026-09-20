onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

var nextButton = document.getElementById('nextButton');

setTimeout(function () {
    nextButton.classList.add('show');
}, 2000);

nextButton.addEventListener('click', function () {
    window.location.href = './cloud.html';;
});
