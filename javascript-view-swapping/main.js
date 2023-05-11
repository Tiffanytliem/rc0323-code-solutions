const $tabContainer = document.querySelector('.tab-container');
const $allTabs = document.querySelectorAll('.tab');
const $allViews = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $allTabs.length; i++) {
      if (event.target === $allTabs[i]) {
        $allTabs[i].className = 'tab active';

        const dataView = event.target.getAttribute('data-view');
        for (let j = 0; j < $allViews.length; j++) {
          if (dataView === $allViews[j].getAttribute('data-view')) {
            $allViews[j].className = 'view';
          } else {
            $allViews[j].className = 'view hidden';
          }
        }
      } else {
        $allTabs[i].className = 'tab';
      }
    }
  }
});
