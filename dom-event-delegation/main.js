function click(e) {
  console.log('event.target:', e.target);
  console.log('event.target.tagName:', e.target.tagName);

  if (e.target.tagName === 'BUTTON') {
    const $taskListItem = e.target.closest('.task-list-item');
    console.log('Closest .task-list-item:', $taskListItem);
    $taskListItem.remove();
  }
}
const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', click);
