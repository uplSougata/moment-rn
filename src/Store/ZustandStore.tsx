import { create } from 'zustand'
import { MMKV } from 'react-native-mmkv'

const storage: any = new MMKV();

export const useDetailStore = create((set) => ({
    details: {},
    setDetails: (data: any) => set((state: any) => ({
        details: data
    })),
    reSetDetails: () => set({ details: {} }),
}))

export const useCreateAndGetData = create((set, get) => ({
    storedData: storage.getString('InputData') == null ? [] : JSON.parse(storage.getString('InputData')),
    setData: (data: any) => {
        set((state: any) => ({
            storedData: [...state.storedData, data],
        }));
        const currentState: any = get();
        storage.set('InputData', JSON.stringify(currentState.storedData));
    },
}))


