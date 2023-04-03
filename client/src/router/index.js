import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProductView from "@/views/ProductView.vue";
import CollectionView from "@/views/CollectionView.vue";
import ProductAdd from "@/views/ProductAdd.vue";
import ProductEdit from "@/views/ProductEdit.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/collection",
        name: "collection",
        component: CollectionView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/add-product",
        name: "add-product",
        component: ProductAdd,
    },
    {
        path: "/product/:id",
        name: "product",
        component: ProductView,
    },
    {
        path: "/edit-product/:id",
        name: "edit-product",
        component: ProductEdit,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
