import { useState, useEffect } from "react";
import { ShopingCart, useCartModal } from "@/context/CartModalContext";
import { Compare, useCompare } from "@/context/CompareContext";
import { QuickAdd, useQuickAdd } from "@/context/QuickAddContext";
import { QuickView, useQuickView } from "@/context/QuickViewContext";
import { useWishlist, Wishlist } from "@/context/WishlistContext";

export const ActiveModal = ({ modal, product }) => {
  const [activeProduct, setActiveProduct] = useState(product);
  const { isOpen: isOpenWishlist, setOpen: setOpenWishlist } = useWishlist();
  const { isOpen: isOpenCompare, setOpen: setOpenCompare } = useCompare();
  const { isOpen: isOpenQuickView, setOpen: setOpenQuickView } = useQuickView();
  const { isOpen: isOpenQuickAdd, setOpen: setOpenQuickAdd } = useQuickAdd();
  const { isOpen: isOpenCart, setOpen: setOpenCart } = useCartModal();

  const handleCloseAllModals = () => {
    // Close all modals except the one specified by `modal`
    setOpenWishlist(false);
    setOpenCompare(false);
    setOpenQuickView(false);
    setOpenQuickAdd(false);
    setOpenCart(false);
  };

  const handleOpenModal = () => {
    // Close all modals first
    handleCloseAllModals();

    // If the modal is already open, toggle it off (close it) and don't open it again
    switch (modal) {
      case "wishlist":
        if (!isOpenWishlist) {
          setOpenWishlist(true);
        }
        break;
      case "compare":
        if (!isOpenCompare) {
          setOpenCompare(true);
        }
        break;
      case "quickview":
        if (!isOpenQuickView) {
          setOpenQuickView(true);
        }
        break;
      case "quickadd":
        if (!isOpenQuickAdd) {
          setOpenQuickAdd(true);
        }
        break;
      case "cart":
        if (!isOpenCart) {
          setOpenCart(true);
        }
        break;
      default:
        break;
    }
  };

  // Open modal when `modal` or `activeProduct` changes
  useEffect(() => {
    handleOpenModal();
  }, [modal, activeProduct]);

  return (
    <>
      {isOpenWishlist && <Wishlist product={activeProduct} />}
      {isOpenCompare && <Compare product={activeProduct} />}
      {isOpenQuickView && <QuickView product={activeProduct} />}
      {isOpenQuickAdd && <QuickAdd product={activeProduct} />}
      {isOpenCart && <ShopingCart />}
    </>
  );
};
