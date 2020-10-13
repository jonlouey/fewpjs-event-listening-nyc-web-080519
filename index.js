function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
      alert('I was clicked!');
    });
}

addingEventListener()

function addingEventListenerFirstBox() {
  const box = document.getElementById('first_box');
  box.addEventListener('click', function(event) {
    alert('I am the first box!')
    console.log("test");
  });
}

addingEventListenerFirstBox()




