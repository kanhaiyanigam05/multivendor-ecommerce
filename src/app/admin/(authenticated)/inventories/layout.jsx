import React from "react";
import { MediaModal, MediaProvider } from "@/admin/context/MediaContext";

const InventoryLayout = ({children}) => {
  return <MediaProvider>
    {children}
    <MediaModal />
  </MediaProvider>;
};

export default InventoryLayout;
