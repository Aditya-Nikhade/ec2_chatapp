import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
	updateTrigger: 0,
	triggerConversationUpdate: () => set(state => ({ updateTrigger: state.updateTrigger + 1 })),
}));

export default useConversation;