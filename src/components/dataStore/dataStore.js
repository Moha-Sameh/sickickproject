import { makeObservable, observable, action } from "mobx";
import { data } from "./Data";

class DataStore {
  data = data;

  constructor() {
    makeObservable(this, {
      data: observable,
      deleteMusic: action,
    });
  }
  deleteMusic = (musicID) => {
    this.data = this.data.filter((data) => data.id !== musicID);
  };
}

const dataStore = new DataStore();
export default dataStore;
