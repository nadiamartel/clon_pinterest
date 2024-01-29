import { create } from 'zustand';

//a esto lo copio tal cual de la docu
export const useBookStore = create((set) => ({
    value: "cat", //estado global
    updateValue: (newValue) => set({value: newValue})
  }))

//esto seria todo el estado global!