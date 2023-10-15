"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onComfirm: () => void;
  loading: boolean;
};

export const AlertModal = ({ isOpen, onClose, onComfirm, loading }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title="Are you sure?"
      descripcion="This action cannot be undone"
      isOpen={isOpen}
      onClose={onClose}>
      <div className="pt-6 space-x-2 items-center justify-end w-full">
        <Button disabled={loading} variant={"outline"} onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant={"destructive"} onClick={onComfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
