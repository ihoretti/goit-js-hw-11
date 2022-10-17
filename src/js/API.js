import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class NewApi {
  constructor() {
    this.searchQuery = ''; // по умолчанию форма пустая, класс должен хранить эту информацию
    this.page = 1; // по умолчанию страница 1
    this.perPage = 40;
    this.params = {
      params: {
        key: '30661779-0ac9a2888848bc4b079840e05',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.perPage,
      },
    };
  } // конструктор
  async fetchArticles() {
    // ничего не будем получать, только отправлять

    try {
      const urlAXIOS = `?page=${this.page}&q=${this.query}`;
      const { data } = await axios.get(urlAXIOS, this.params);
      this.incrementPage();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get currentPage() {
    return this.page;
  }
  get query() {
    return this.searchQuery; // если нужно будет получить значение query
  }

  set query(newQeury) {
    // если нужно будет обновить searchQuery
    this.searchQuery = newQeury;
  }
}
