<template>
    <!-- Section-->

    <section
        className="max-w-7xl my-0 mx-auto flex flex-col gap-6 overflow-auto border-8 border-black"
    >
        <NavBar />
        <h1 class="text-5xl text-center font-bold p-4">Ajout d'une photo</h1>
        <div class="flex flex-row flex-wrap justify-evenly gap-14 pl-10 pb-14">
            <div
                class="flex flex-col items-center items shadow-2xl shadow-black border-8 border-black"
                v-for="product in inventory"
                :key="product.id"
            >
                <div class="w-96">
                    <img
                        class="object-contain"
                        :src="require(`@/assets/img/${product.photo}.webp`)"
                        :alt="product.name"
                    />
                </div>
                <article
                    className="w-44 flex flex-col items-center justify-between text-ellipsis"
                    key="{id}"
                >
                    <h2 className="text-2xl font-bold p-2 ">
                        {{ product.name }}
                    </h2>
                    <p className="p-2">{{ product.categorie }}</p>
                    <p
                        className=" text-center text-ellipsis overflow-hidden whitespace-nowrap w-32 p-2"
                    >
                        {{ product.description }}
                    </p>
                    <h3 className="text-xl p-2">{{ product.price }} $</h3>
                    <div class="flex items-center justify-centrer gap-4 pb-8">
                        <router-link
                            class="nav-link"
                            :to="'/edit-product/' + product.id"
                        >
                            <img
                                class="h-6"
                                src="@/assets/edit-1-svgrepo-com.svg"
                                alt=""
                            />
                        </router-link>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
        NavBar,
    },
    props: ["inventory", "addInv", "removeInv", "updateInv"],
    data() {
        return {
            submitted: false,
            id: parseInt(this.$route.params.id),
        };
    },
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
