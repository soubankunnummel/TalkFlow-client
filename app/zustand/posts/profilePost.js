import {create} from 'zustand'

const useProfile = create((set) => ({  
    profile: false, 
    setProfil: () => set({ profile: true, selected: "profile" }),


    setOutProfile: () => set({ profile: false, selected: null }),
    userprofile: false, 
    setUserProfil: () => set({ userprofile: true, selected: "userprofile" }),


    search: false,
    setSearch: () => set({ search: true, selected: "search" }), 
    setOutSearch: () => set({ search: false, selected: null }),
    likes: false,
    setLikes: () => set({ likes: true, selected: "likes" }),
    setOutLikes: () => set({ likes: false, selected: null }),
    selected: null,

    home: false,
    setHome : () => set({home:true, selected:"home"})


}))
export { useProfile }