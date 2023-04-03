<template>
    <section>
        <article
            className="max-w-fit border-4 border-black flex flex-col items-center justify-between text-ellipsis"
            key="{id}"
        >
            <h2 className="text-2xl font-bold p-2">
                {{ product.name }}
            </h2>
            <h3 className="text-xl p-2">{{ product.price }}</h3>
            <p className="p-2">{{ product.type }}</p>
            <p
                className="text-ellipsis overflow-hidden whitespace-nowrap w-full p-2"
            >
                {description}
            </p>
        </article>
    </section>
</template>
