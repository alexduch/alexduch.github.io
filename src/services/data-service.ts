import en from '../data/en.json';
import fr from '../data/fr.json';

export default class DataService {
  private data = new Map<string, any>();

  constructor() {
    this.data.set('en', en);
    this.data.set('fr', fr);
  }

  public getData(locale: string) {
    const d = this.data.get(locale);
    if (!d) {
      return en;
    }
    return d;
  }
}
