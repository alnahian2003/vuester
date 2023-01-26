<script setup>
let props = defineProps({
  show: { type: Boolean, default: false },
});
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-200"
    leave-active-class="transition duration-100"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
    name="modal"
  >
    <!-- Modal -->
    <div
      v-if="show"
      id="modal"
      class="grid place-items-center fixed bg-black/60 backdrop-blur-sm top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full"
    >
      <div class="relative w-full max-w-xl h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t">
            <h3 class="text-xl capitalize font-semibold text-gray-900">
              <slot name="head">Add a new team member</slot>
            </h3>

            <!-- Close Modal Button -->
            <button
              @click="$emit('close')"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <slot name="body" />
          </div>

          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b"
            v-if="$slots.footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
