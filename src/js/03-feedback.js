import throttle from 'lodash.throttle';
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit); //слушатель на отправку данных submit
refs.form.addEventListener('input', throttle(ontTextareaInput, 500)); //слушатель на окна ввода данных input

function onFormSubmit(evt) {
  //не дает перезагружаться странице
  evt.preventDefault();

  //очищает поля ввода после отправки сообщения
  evt.currentTarget.reset();

  //очищает localStorage от того, что там
  // сохраняется на случай перезагрузки страницы
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

const data = {
  email: '',
  message: '',
};
//записывает значение которое ввели в localStorage
function ontTextareaInput(evt) {
  const message = evt.target.value;

  //в первой часте в обьект data с названием(ключом [evt.target.name])
  // добавлятся значение которое мы ввели "evt.target.value"
  data[evt.target.name] = evt.target.value;
  console.log(data);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function populateForm() {
  const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
  console.log(typeof saveData);
  if (saveData) {
    console.log(saveData);
    const objSaveData = JSON.parse(saveData);
    for (const key in objSaveData) {
      if (objSaveData.hasOwnProperty(key)) {
        //если е
        // const element = objSaveData[key];
        refs.form.elements[key].value = objSaveData[key];
      }
    }
  }
}

populateForm();
