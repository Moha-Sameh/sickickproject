import axios from "axios";
import { makeAutoObservable } from "mobx";

class DataStore {
  data = null;

  constructor() {
    makeAutoObservable(this, this.deleteMusic);
  }

  inisialiseAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8000/music");
      this.data = response.data;
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
  deleteMusic = (musicID) => {
    this.data = this.data.filter((data) => data.id !== musicID);
  };
}

const dataStore = new DataStore();
dataStore.inisialiseAPI();
export default dataStore;
