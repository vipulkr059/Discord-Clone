"use client";

import React, { useEffect, useState } from "react";
import CreateServerModal from "@/components/modal/create-server-modal";
import InviteModal from "@/components/modal/invite-modal";
import EditServerModal from "../modal/edit-serve-modal";

export const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
    </>
  );
};
