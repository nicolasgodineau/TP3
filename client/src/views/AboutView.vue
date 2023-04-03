<template>
    <section
        class="max-w-7xl h-screen my-0 mx-auto flex flex-col gap-6 overflow-auto border-8 border-black"
    >
        <NavBar />
        <h1 class="text-5xl text-center font-bold p-4">A propos</h1>
        <div className="text-center">
            <p>Création d'un site web à l'aide du framework Vue.JS</p>
        </div>
    </section>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
        NavBar,
    },
};
</script>
