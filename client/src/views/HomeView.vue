<template>
    <main
        className="max-w-7xl h-screen my-0 mx-auto border-8 border-black flex flex-col items-center"
    >
        <h1
            className="w-full p-8 text-7xl text-center font-bold bg-black text-white"
        >
            Welcome to Nico's gallery
        </h1>

        <div
            className="max-w-[80ch] h-full flex flex-col text-xl items-center justify-center gap-4 text-left p-4"
        >
            <p>
                <strong>Vous êtes amateur de beaux paysages ?</strong>
                <br />
                Voici une nouvelle galerie web présentant des photographies de
                paysages à couper le souffle, capturées au cours des 10
                dernières années. <br />
                Chaque photographie de cette collection met en valeur les
                montagnes majestueuses, les lacs sereins, les collines et les
                vallées pittoresques qui composent notre monde naturel.
                <br />
                Que vous soyez attiré par les couleurs vibrantes d'un coucher de
                soleil ou la tranquillité paisible d'un matin brumeux, il y en a
                pour tous les goûts.
            </p>
            <p>
                <strong>Are you a lover of beautiful landscapes?</strong>
                <br />
                Here is a new web gallery featuring breathtaking landscape
                photographs, captured over the past 10 years
                <br />
                Each photograph in this collection showcases the majestic
                mountains, serene lakes, scenic hills and valleys that make up
                our natural world.
                <br />
                Whether you are drawn to the vibrant colors of a sunset or the
                peaceful tranquility of a misty morning, there is something for
                everyone.
            </p>
            <router-link
                class="nav-link text-white text-center font-semibold bg-black shadow w-64 block border-black border-2 px-8 py-4 text-whiteTheme hover:bg-whiteTheme hover:text-black hover:bg-transparent transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                aria-current="page"
                to="/collection"
                >Découvrez</router-link
            >
        </div>
    </main>
</template>
