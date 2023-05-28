import { create } from 'zustand'

type EventModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useEventModal = create<EventModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useEventModal;