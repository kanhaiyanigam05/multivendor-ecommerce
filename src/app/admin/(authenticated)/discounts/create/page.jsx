import { redirect } from "next/navigation";

const DiscountRedirect = () => {
  redirect("/admin/discounts/create/amount-off-product");
};

export default DiscountRedirect;
