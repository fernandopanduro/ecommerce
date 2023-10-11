"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      descripcion="Add a new store to manege products ans categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      Feature Create Store Form
    </Modal>
  );
};
