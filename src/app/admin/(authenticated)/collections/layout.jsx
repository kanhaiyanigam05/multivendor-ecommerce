import React from "react";
import { MediaModal, MediaProvider } from "@/admin/context/MediaContext";

const CollectionLayout = ({children}) => {
  return <MediaProvider>
    {children}
    <MediaModal />
  </MediaProvider>;
};

export default CollectionLayout;
