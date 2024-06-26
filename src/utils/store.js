import axios from "axios";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  allUsers: [],
  userData: {},
  id: 0,
  setId: (id) => set({ id: id }),
  cleanUserData: () => set({ userData: {} }),
  fetchAllUsers: async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/");
      const { data } = res.data;
      set({ allUsers: data });
    } catch (err) {
      console.error(err);
    }
  },
  fetchUser: async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/user/${id}`);
      const { data } = res.data;
      set({ userData: data });
    } catch (err) {
      console.error(err);
    }
  },
  addUser: async (name, email) => {
    try {
      await axios.post("http://localhost:8080/api/user/", {
        name,
        email,
      });
      get().fetchAllUsers();
    } catch (err) {
      console.error(err);
    }
  },
  deleteUser: async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/user/${id}`);
      if (get().id == id) get().cleanUserData();
      get().fetchAllUsers();
    } catch (err) {
      console.error(err);
    }
  },
  updateMoney: async (id, money) => {
    try {
      console.log(Number(money));
      await axios.put(`http://localhost:8080/api/user/money/${id}`, {
        money: Number(money),
      });
      get().fetchUser(id);
    } catch (err) {
      console.error(err);
    }
  },
  sendNotification: async (id) => {
    try {
      const res = await axios.post(`http://localhost:8080/api/user/notify`, {
        to: id,
        subject: "Cambio en la cartera",
        message:
          "Este correo es para avisarle que hubo un cambio en su carte de Puma-Dolares, favor de checarlo en el sistema",
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  },
}));
