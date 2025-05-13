import { ShopingCart, useCartModal } from "@/context/CartModalContext";
import { Compare, useCompare } from "@/context/CompareContext";
import { QuickAdd, useQuickAdd } from "@/context/QuickAddContext";
import { QuickView, useQuickView } from "@/context/QuickViewContext";
import { useWishlist, Wishlist } from "@/context/WishlistContext";
import React from "react";

const InitModal = () => {
  const { isOpen: isOpenCart, data: dataCart } = useCartModal();
  const { isOpen: isOpenQuickAdd, data: dataQuickAdd } = useQuickAdd();
  const { isOpen: isOpenQuickView, data: dataQuickView } = useQuickView();
  const { isOpen: isOpenCompare, data: dataCompare } = useCompare();
  const { isOpen: isOpenWishlist, data: dataWishlist } = useWishlist();
  return (
    <>
      {isOpenCart && dataCart && <ShopingCart />}
      {isOpenWishlist && dataWishlist && <Wishlist />}
      {isOpenCompare && dataCompare && <Compare />}
      {isOpenQuickView && dataQuickView && <QuickView />}
      {isOpenQuickAdd && dataQuickAdd && <QuickAdd />}
    </>
  );
};

export default InitModal;
