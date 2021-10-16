<template>
    <div class="product-head">
        <div class="product-head-name">${productData.name}</div>
        <div class="product-add-item" data-productId="${productData._id}">Add To Cart</div>
        </div>
        <div class="product-info">
            <div class="product-info-cost">&#8377;${productData.cost}</div>
            <div class="product-info-count">Count :${productData.count}</div>
        </div>
</template>

<script>
export default {
    name : "Product"
}
</script>