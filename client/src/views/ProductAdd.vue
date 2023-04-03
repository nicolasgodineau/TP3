<template>
    <section
        class="max-w-7xl h-screen my-0 mx-auto flex flex-col items-center gap-8 border-8 border-black pb-14"
    >
        <NavBar />
        <h1 class="text-5xl text-center font-bold p-4">Ajout d'une photo</h1>
        <div
            class="needs-validation shadow-lg shadow-black border-8 border-black flex flex-col items-center justify-between gap-8 p-4"
            novalidate
            v-if="!submitted"
        >
            <div class="flex flex-col w-full">
                <p>Nom de la photo</p>
                <input
                    aria-label="Nom de la photo"
                    type="text"
                    class="peer bg-transparent border-b-2 border-black"
                    id="productName"
                    placeholder=""
                    required
                    v-model="product.name"
                />
                <!--                     <div
                        class="invisible peer-invalid:visible text-red-700 font-light"
                    >
                        Besoin d'un nom.
                    </div> -->
            </div>
            <div class="flex flex-col w-full">
                <p>Photo</p>
                <select
                    aria-label="Photo du produit"
                    name="productPhoto"
                    id="productPhoto"
                    class="peer bg-transparent border-b-2 border-black"
                    required
                    v-model="product.photo"
                >
                    <option value="Affiche1">Affiche1</option>
                    <option value="Affiche2">Affiche2</option>
                    <option value="Affiche3">Affiche3</option>
                    <option value="Affiche4">Affiche4</option>
                    <option value="Affiche5">Affiche5</option>
                    <option value="Affiche6">Affiche6</option>
                    <option value="Affiche7">Affiche7</option>
                    <option value="Affiche8">Affiche8</option>
                    <option value="Affiche9">Affiche9</option>
                    <option value="Affiche10">Affiche10</option>
                    <option value="Affiche11">Affiche11</option>
                    <option value="Affiche12">Affiche12</option>
                </select>
                <!--                     <div
                        class="invisible peer-invalid:visible text-red-700 font-light"
                    >
                        Choisir une photo.
                    </div> -->
            </div>
            <div class="flex flex-col w-full">
                <p>Prix en CAD</p>
                <div>
                    <input
                        aria-label="Prix en CAD"
                        type="text"
                        class="peer bg-transparent border-b-2 border-black"
                        id="productPrice"
                        placeholder=""
                        required
                        v-model="product.price"
                    />
                    <!--                         <div
                            class="invisible peer-invalid:visible text-red-700 font-light"
                        >
                            Price is required.
                        </div> -->
                </div>
            </div>
            <div class="flex flex-col w-full">
                <p>Description de la photo</p>
                <textarea
                    aria-label="Description de la photo"
                    class="peer bg-transparent border-b-2 border-black"
                    id="productDescription"
                    v-model="product.description"
                ></textarea>
                <!--                     <div
                        class="invisible peer-invalid:visible text-red-700 font-light"
                    >
                        Valid description
                    </div> -->
            </div>
            <div class="flex flex-col w-full">
                <p>Categorie de la photo</p>
                <select
                    aria-label="Categorie de la photo"
                    name="productCategorie"
                    class="peer bg-transparent border-b-2 border-black"
                    id="productCategorie"
                    required
                    v-model="product.categorie"
                >
                    <option value="Voyage">Voyage</option>
                    <option value="Mariage">Mariage</option>
                </select>
            </div>
            <button
                class="nav-link text-white text-center bg-black shadow w-32 block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black hover:bg-transparent transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                type="button"
                @click="saveProduct"
            >
                Créer
            </button>
        </div>
    </section>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PhotoDataService from "@/services/PhotoDataService";

export default {
    components: {
        NavBar,
    },
    props: ["addInv"],
    data() {
        return {
            submitted: false,
            product: {
                name: "",
                photo: "",
                price: "",
                description: "",
                categorie: "",
            },
        };
    },
    methods: {
        saveProduct() {
            console.log(this.product);
            PhotoDataService.create(this.product).then((response) => {
                this.product.id = response.data.id;
                this.addInv(this.product);
                this.submitted = true;
                this.$router.push({ name: "collection" });
            });
        },

        newProduct() {
            this.submitted = false;
            this.product = {};
        },
    },
};
</script>
