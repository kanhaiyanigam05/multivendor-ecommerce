import React from "react";
import { MediaModal, MediaProvider } from "@/admin/context/MediaContext";

const ProductLayout = ({children}) => {
  return <MediaProvider>
    {children}
    <MediaModal />
  </MediaProvider>;
};

export default ProductLayout;
