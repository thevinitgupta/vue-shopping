<template>
    <div class="product-head">
        <div class="product-head-name">{{product.name}}</div>
        <div class="product-add-item">Add To Cart</div>
        </div>
        <div class="product-info">
            <div class="product-info-cost">&#8377;${{product.cost}}</div>
            <div class="product-info-count">Count :${{product.count}}</div>
        </div>
</template>

<script>
export default {
    name : "Product",
    props : {
        product : Object
    }
}
</script>