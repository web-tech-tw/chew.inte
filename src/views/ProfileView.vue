<template>
  <div class="container mx-auto my-5 p-5">
    <div class="md:flex no-wrap md:-mx-2">
      <div class="w-full md:w-3/12 md:mx-2">
        <div class="bg-white p-3 border-t-4 border-violet-400">
          <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
            profile.nickname
          </h1>
          <h3 class="text-gray-600 font-lg text-semibold leading-6">
            profile.id
          </h3>
          <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
            deserunt
          </p>
          <ul
            class="
              bg-gray-100
              text-gray-600
              hover:text-gray-700 hover:shadow
              py-2
              px-3
              mt-3
              divide-y
              rounded
              shadow-sm
            "
          >
            <li class="flex items-center py-3">
              <span>Chew Count</span>
              <span class="ml-auto">1,000</span>
            </li>
            <li class="flex items-center py-3">
              <span>Chew Marked</span>
              <span class="ml-auto">500</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-9/12 mx-2">
        <div class="bg-white p-3 shadow-sm rounded-sm">
          <div
            class="
              flex
              items-center
              space-x-2
              font-semibold
              text-gray-900
              leading-8
            "
          >
            <span clas="text-green-500">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="tracking-wide">My Chew</span>
          </div>
        </div>
        <div class="my-4"></div>
      </div>
    </div>
  </div>
</template>