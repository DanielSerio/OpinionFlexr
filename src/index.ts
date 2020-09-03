function init() {
  const formEl: HTMLFormElement = document.getElementById('form') as HTMLFormElement;
  const textareaEl: HTMLTextAreaElement = document.getElementById('textarea') as HTMLTextAreaElement;
  const loaderEl: HTMLSpanElement = document.getElementById('loader') as HTMLSpanElement;

  formEl.addEventListener('submit', handleSubmit);

  function handleSubmit(e: Event): void {
    e.preventDefault();

    if (textareaEl.value.length) {
      loaderEl.classList.remove('hidden');

      window.setTimeout(() => {
        loaderEl.classList.add('hidden');
        textareaEl.value = '';
      }, 1000);
    }
  }

  console.log(`=`.repeat(80));
  console.log(`Created by Dan Serio | 2020`);
  console.log(`=`.repeat(80));
}

init();