import { updateState } from "redux-jetpack";

export async function openModal() {
    updateState("isModalOpen", state => true);
}

export async function closeModal() {
    updateState("isModalOpen", state => false);
}