function hasValidUnitOfMeasure(product = {}) {
    const { unitOfMeasure, comment } = product;
    return !!comment || unitOfMeasure === "L" || unitOfMeasure === "PCE";
}

console.log(
    hasValidUnitOfMeasure({ product: "Milk", unitOfMeasure: "L" }),
    true
);
console.log(
    hasValidUnitOfMeasure({ product: "Cheese", unitOfMeasure: "PCE" }),
    true
);
console.log(
    hasValidUnitOfMeasure({
        product: "Eggs",
        comment: "Eggs are too different in size",
    }),
    true
);
console.log(
    hasValidUnitOfMeasure({ product: "Cerials", unitOfMeasure: "" }),
    false
);
console.log(hasValidUnitOfMeasure({ product: "Flour" }), false);
console.log(
    hasValidUnitOfMeasure({ product: "Beer", unitOfMeasure: false }),
    false
);
console.log(
    hasValidUnitOfMeasure({ product: "Beef", unitOfMeasure: "Cow" }),
    false
);
console.log(hasValidUnitOfMeasure(), false);
