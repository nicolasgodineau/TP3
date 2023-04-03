<template>
    <nav
        className="w-full h-[136px] my-0 mx-auto flex gap-8 items-center justify-center bg-black text-white"
    >
        <router-link
            class="text-xl hover:underline hover:underline-offset-8"
            aria-current="page"
            to="/"
            >Home</router-link
        >
        <router-link
            class="text-xl hover:underline hover:underline-offset-8"
            aria-current="page"
            to="/collection"
            >Collection</router-link
        >
        <router-link
            class="text-xl hover:underline hover:underline-offset-8"
            aria-current="page"
            to="/add-product"
            >Créer</router-link
        >
        <router-link
            class="text-xl hover:underline hover:underline-offset-8"
            aria-current="page"
            to="/about"
            >A propos</router-link
        >
    </nav>
</template>
