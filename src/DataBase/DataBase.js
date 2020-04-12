export class DataBase {
  constructor (name, version) {
    this.dbName = name;
    this.dbVersion = version;
  }

  connect () {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName, this.dbVersion);

      request.onupgradeneeded = this.onupgradeneeded;

      request.onsuccess = (e) => {
        const db = e.target.result;

        db.onversionchange = function () {
          db.close();
          console.error('База данных устарела, пожалуста, перезагрузите страницу.');
        };

        resolve(db)
      };

      request.onerror = (e) => {
        reject(e.target.errorCode)
      };

      request.onblocked = (e) => { reject(e.target.errorCode) };
    });
  }

  onupgradeneeded (e) {
    const store = e.target.result;
    store.createObjectStore('projects', { keyPath: 'id', autoIncrement: true });
  }
}
