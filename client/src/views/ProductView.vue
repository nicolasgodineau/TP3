<template>
    <section class="flex flex-col items-center gap-8">
        <h1 class="text-5xl">Détail</h1>
        <h2 class="display-5 fw-bolder">
            <small>Nom : </small>{{ product.name }}
        </h2>
        <p class="display-5 fw-bolder">
            <small>catégorie : </small>{{ product.type }}
        </p>
        <p class="display-5 fw-bolder">
            <small>Description : </small>{{ product.description }}
        </p>
        <p class="display-5 fw-bolder">
            <small>Prix : </small>{{ product.price.toFixed(2) }} $
        </p>
    </section>
</template>
<script>
export default {
    props: ["inventory"],
    computed: {
        product() {
            const product = this.inventory.find((p) => {
                return p.name === this.$route.params.id;
            });
            return product;
        },
        productIndex() {
            const index = this.inventory.findIndex((p) => {
                return p.name === this.$route.params.id;
            });
            return index;
        },
    },
};
</script>
