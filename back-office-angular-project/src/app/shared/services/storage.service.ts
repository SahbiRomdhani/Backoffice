import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {
  write(key: string, value: any) {
    if (value) {
      this.remove(key);
      value = JSON.stringify(value);
      localStorage.setItem(key, value);
    }
  }

  read<T>(key: string): T {
    const value: string = localStorage.getItem(key);

    if (value && value !== 'undefined' && value !== 'null') {
      return <T>JSON.parse(value);
    }

    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }

  isExist(key: string) {
    return localStorage.getItem(key) != null;
  }
}
