export const DiscountType = Object.freeze({
    AMOUNT_OFF_PRODUCT: "amount-off-product",
    BUY_X_GET_Y: "buy-x-get-y",
    AMOUNT_OFF_ORDER: "amount-off-order",
    FREE_SHIPPING: "free-shipping"
});

export const DiscountMethod = Object.freeze({
    CODE: "code",
    AUTO: "automatic"
});

export const DiscountValue = Object.freeze({
    PERCENTAGE: "percentage",
    FIXED: "fixed",
    FREE: "free"
});

export const DiscountApplyOn = Object.freeze({
    COLLECTIONS: "collections",
    PRODUCTS: "products"
});

export const DiscountRequirement = Object.freeze({
    NO: "no_minimum_requirements",
    AMOUNT: "minimum_purchase_amount",
    QUANTITY: "minimum_quantity_items"
});

export const DiscountBuys = Object.freeze({
    QUANTITY: "minimum_quantity_items",
    AMOUNT: "minimum_purchase_amount"
});

export const DiscountEligibility = Object.freeze({
    ALL: "all",
    SPECIFIC: "specific"
});