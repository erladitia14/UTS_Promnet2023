const form = document.querySelector('form');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  // Cek apakah input kosong
  if (!form.email.value || !form.subject.value || !form.message.value) {
    alert('Harap isi semua input');
    return;
  }

  // Tampilkan notifikasi
  alert('Form submitted');
});

const imgContainers = document.querySelectorAll('.img-container');

imgContainers.forEach((imgContainer) => {
  const imgText = imgContainer.querySelector('.img-text');

  imgContainer.addEventListener('mouseover', () => {
    imgText.classList.add('text-gray-400');
  });

  imgContainer.addEventListener('mouseout', () => {
    imgText.classList.remove('text-gray-400');
  });
});

const resumeBtn = document.getElementById('resume-btn');
const resumeText = document.getElementById('resume-text');

resumeBtn.addEventListener('click', () => {
  resumeText.classList.toggle('hidden');
});
