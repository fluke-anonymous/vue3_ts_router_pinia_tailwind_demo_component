<script setup lang="ts">
const array = [
  {
    title: "Lion",
    value: "Lion"
  },
]
</script>
<template>
  <section
    class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
        class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600">
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Knausgaard typewriter
          readymade marfa</h1>
        <p class="mb-8 leading-relaxed">
          Chillwave portland ugh,
          knausgaard fam polaroid
          iPhone. Man braid swag
          typewriter affogato, hella
          selvage wolf narwhal
          dreamcatcher.</p>
        <div
          class="flex w-full md:justify-start justify-center items-end">
          <div
            class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
            <label for="hero-field"
              class="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text"
              id="hero-field"
              name="hero-field"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
        <p
          class="text-sm mt-2 text-gray-500 mb-8 w-full">
          Neutra shabby chic ramps,
          viral fixie.</p>
        <div
          class="flex lg:flex-row md:flex-col">
          <button
            class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6"
              viewBox="0 0 512 512">
              <path
                d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
              </path>
            </svg>
            <span
              class="ml-4 flex items-start flex-col leading-none">
              <span
                class="text-xs text-gray-600 mb-1">GET
                IT ON</span>
              <span
                class="title-font font-medium">Google
                Play</span>
            </span>
          </button>
          <button
            class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6"
              viewBox="0 0 305 305">
              <path
                d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z">
              </path>
              <path
                d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z">
              </path>
            </svg>
            <span
              class="ml-4 flex items-start flex-col leading-none">
              <span
                class="text-xs text-gray-600 mb-1">Download
                on the</span>
              <span
                class="title-font font-medium">App
                Store</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section
    class="text-gray-600 body-font">
    <div
      class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Master Cleanse Reliac
          Heirloom</h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag
          tumblr hexagon brooklyn
          asymmetrical gentrify,
          subway tile poke
          farm-to-table. Franzen you
          probably haven't heard of
          them man bun deep jianbing
          selfies heirloom prism food
          truck ugh squid celiac
          humblebrag.</p>
      </div>
      <div
        class="flex flex-wrap -m-4 text-center">
        <div
          class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div
            class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24">
              <path
                d="M8 17l4 4 4-4m-4-5v9">
              </path>
              <path
                d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29">
              </path>
            </svg>
            <h2
              class="title-font font-medium text-3xl text-gray-900">
              2.7K</h2>
            <p class="leading-relaxed">
              Downloads</p>
          </div>
        </div>
        <div
          class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div
            class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24">
              <path
                d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2">
              </path>
              <circle cx="9" cy="7"
                r="4"></circle>
              <path
                d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75">
              </path>
            </svg>
            <h2
              class="title-font font-medium text-3xl text-gray-900">
              1.3K</h2>
            <p class="leading-relaxed">
              Users</p>
          </div>
        </div>
        <div
          class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div
            class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24">
              <path
                d="M3 18v-6a9 9 0 0118 0v6">
              </path>
              <path
                d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z">
              </path>
            </svg>
            <h2
              class="title-font font-medium text-3xl text-gray-900">
              74</h2>
            <p class="leading-relaxed">
              Files</p>
          </div>
        </div>
        <div
          class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div
            class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24">
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
              </path>
            </svg>
            <h2
              class="title-font font-medium text-3xl text-gray-900">
              46</h2>
            <p class="leading-relaxed">
              Places</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="text-gray-600 body-font">
    <div
      class="container px-5 py-24 mx-auto flex flex-wrap">
      <div
        class="flex w-full mb-20 flex-wrap">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          Master Cleanse Reliac
          Heirloom</h1>
        <p
          class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag
          tumblr hexagon brooklyn
          asymmetrical gentrify,
          subway tile poke
          farm-to-table. Franzen you
          probably haven't heard of
          them man bun deep jianbing
          selfies heirloom.</p>
      </div>
      <div
        class="flex flex-wrap md:-m-2 -m-1">
        <div
          class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/500x300">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/501x301">
          </div>
          <div
            class="md:p-2 p-1 w-full">
            <img alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/600x360">
          </div>
        </div>
        <div
          class="flex flex-wrap w-1/2">
          <div
            class="md:p-2 p-1 w-full">
            <img alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/601x361">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/502x302">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/503x303">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="text-gray-600 body-font">
    <div
      class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Master Cleanse Reliac
          Heirloom</h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag
          tumblr hexagon brooklyn
          asymmetrical gentrify,
          subway tile poke
          farm-to-table. Franzen you
          probably haven't heard of
          them man bun deep jianbing
          selfies heirloom.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/600x360">
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2
                class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE</h2>
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars</h1>
              <p
                class="leading-relaxed">
                Photo booth fam
                kinfolk cold-pressed
                sriracha leggings
                jianbing microdosing
                tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/601x361">
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2
                class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE</h2>
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3">
                The Catalyzer</h1>
              <p
                class="leading-relaxed">
                Photo booth fam
                kinfolk cold-pressed
                sriracha leggings
                jianbing microdosing
                tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/603x363">
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2
                class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE</h2>
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3">
                The 400 Blows</h1>
              <p
                class="leading-relaxed">
                Photo booth fam
                kinfolk cold-pressed
                sriracha leggings
                jianbing microdosing
                tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/602x362">
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2
                class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE</h2>
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3">
                Neptune</h1>
              <p
                class="leading-relaxed">
                Photo booth fam
                kinfolk cold-pressed
                sriracha leggings
                jianbing microdosing
                tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/605x365">
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2
                class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE</h2>
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3">
                Holden Caulfield</h1>
              <p
                class="leading-relaxed">
                Photo booth fam
                kinfolk cold-pressed
                sriracha leggings
                jianbing microdosing
                tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/606x366">
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2
                class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE</h2>
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3">
                Alper Kamu</h1>
              <p
                class="leading-relaxed">
                Photo booth fam
                kinfolk cold-pressed
                sriracha leggings
                jianbing microdosing
                tousled waistcoat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="text-gray-600 body-font">
    <div
      class="container px-5 py-24 mx-auto flex flex-wrap">
      <div
        class="flex flex-wrap w-full">
        <div
          class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div
            class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div
                class="h-full w-1 bg-gray-200 pointer-events-none">
              </div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                </path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 1</h2>
              <p
                class="leading-relaxed">
                VHS cornhole pop-up,
                try-hard 8-bit iceland
                helvetica. Kinfolk
                bespoke try-hard cliche
                palo santo offal.</p>
            </div>
          </div>
          <div
            class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div
                class="h-full w-1 bg-gray-200 pointer-events-none">
              </div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M22 12h-4l-3 9L9 3l-3 9H2">
                </path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 2</h2>
              <p
                class="leading-relaxed">
                Vice migas literally
                kitsch +1 pok pok.
                Truffaut hot chicken
                slow-carb health goth,
                vape typewriter.</p>
            </div>
          </div>
          <div
            class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div
                class="h-full w-1 bg-gray-200 pointer-events-none">
              </div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <circle cx="12" cy="5"
                  r="3"></circle>
                <path
                  d="M12 22V8M5 12H2a10 10 0 0020 0h-3">
                </path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 3</h2>
              <p
                class="leading-relaxed">
                Coloring book nar whal
                glossier master cleanse
                umami. Salvia +1 master
                cleanse blog taiyaki.
              </p>
            </div>
          </div>
          <div
            class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div
                class="h-full w-1 bg-gray-200 pointer-events-none">
              </div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2">
                </path>
                <circle cx="12" cy="7"
                  r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 4</h2>
              <p
                class="leading-relaxed">
                VHS cornhole pop-up,
                try-hard 8-bit iceland
                helvetica. Kinfolk
                bespoke try-hard cliche
                palo santo offal.</p>
            </div>
          </div>
          <div class="flex relative">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M22 11.08V12a10 10 0 11-5.93-9.14">
                </path>
                <path
                  d="M22 4L12 14.01l-3-3">
                </path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                FINISH</h2>
              <p
                class="leading-relaxed">
                Pitchfork ugh tattooed
                scenester echo park
                gastropub whatever
                cold-pressed retro.</p>
            </div>
          </div>
        </div>
        <img
          class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
          src="https://dummyimage.com/1200x500"
          alt="step">
      </div>
    </div>
  </section>
  <section
    class="text-gray-600 body-font">
    <div
      class="container px-5 py-24 mx-auto">
      <h1
        class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
        Testimonials</h1>
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 md:w-1/2 w-full">
          <div
            class="h-full bg-gray-100 p-8 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036">
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
              </path>
            </svg>
            <p
              class="leading-relaxed mb-6">
              Synth chartreuse iPhone
              lomo cray raw denim brunch
              everyday carry neutra
              before they sold out fixie
              90's microdosing. Tacos
              pinterest fanny pack
              venmo, post-ironic
              heirloom try-hard pabst
              authentic iceland.</p>
            <a
              class="inline-flex items-center">
              <img alt="testimonial"
                src="https://dummyimage.com/106x106"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
              <span
                class="flex-grow flex flex-col pl-4">
                <span
                  class="title-font font-medium text-gray-900">Holden
                  Caulfield</span>
                <span
                  class="text-gray-500 text-sm">UI
                  DEVELOPER</span>
              </span>
            </a>
          </div>
        </div>
        <div
          class="p-4 md:w-1/2 w-full">
          <div
            class="h-full bg-gray-100 p-8 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036">
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
              </path>
            </svg>
            <p
              class="leading-relaxed mb-6">
              Synth chartreuse iPhone
              lomo cray raw denim brunch
              everyday carry neutra
              before they sold out fixie
              90's microdosing. Tacos
              pinterest fanny pack
              venmo, post-ironic
              heirloom try-hard pabst
              authentic iceland.</p>
            <a
              class="inline-flex items-center">
              <img alt="testimonial"
                src="https://dummyimage.com/107x107"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
              <span
                class="flex-grow flex flex-col pl-4">
                <span
                  class="title-font font-medium text-gray-900">Alper
                  Kamu</span>
                <span
                  class="text-gray-500 text-sm">DESIGNER</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
