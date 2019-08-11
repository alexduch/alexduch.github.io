import en from '../data/en.json';
import fr from '../data/fr.json';

export default class DataService {
  private internalData = new Map<string, any>();
  private language: any;

  constructor() {
    this.internalData.set('en', en);
    this.internalData.set('fr', fr);
    this.language = window.navigator.language;
  }

  get data() {
    const d = this.internalData.get(this.locale);
    if (!d) {
      return en;
    }
    return d;
  }

  set locale(language: string) {
    if (this.internalData.has(language)) {
      this.language = language;
    }
  }

  get locale() {
    return this.language;
  }
}
