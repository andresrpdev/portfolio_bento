import {create} from "zustand";

export type LangStore = {
    lang: string;
    setLang: (lang: string) => void;
}

export const useLangStore = create((set)=>{
    lang: "es";
    setLang: (lang: string) => set({lang});
})