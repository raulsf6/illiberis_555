export default function Hero() {
  return (
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 my-10 text-center lg:py-48 lg:text-left lg:items-center">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-blue-800 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block inline">Grupo Scout <span class="block text-yellow-300 inline">555</span></span>
            <span class="block">Illíberis</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">Grupo scout ubicado en Ogíjares, Granada</p>
        </div>
      </div>
      <div class="relative h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 items-center">
        <img class="w-full self-center" src="https://static.vecteezy.com/system/resources/previews/000/363/120/original/three-kids-in-scout-uniform-vector.jpg" alt="" />
      </div>
    </main>
  )
}