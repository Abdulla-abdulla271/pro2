function handleOption(option) {
    const result = document.getElementById('result');
    if (option === 'you') {
      result.textContent = 'Of course, I love you the most 😍!';
    } else {
      result.textContent = 'not quite as much as you you stupid baby 🤱';
    }
    result.classList.add('highlight');
    setTimeout(() => {
      result.classList.remove('highlight');
    }, 2000);
  }
  