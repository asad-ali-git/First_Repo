<template>
  <div>
    <ToastNotifications />
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div
        class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
      >
        <div class="flex flex-col overflow-y-auto md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              class="object-cover w-full h-full dark:hidden"
              src="./../../images/login-office.jpeg"
              alt="Office"
            >
            <img
              aria-hidden="true"
              class="hidden object-cover w-full h-full dark:block"
              src="./../../images/login-office-dark.jpeg"
              alt="Office"
            >
          </div>
          <child />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToastNotifications from '~/components/app/ToastNotifications'

export default {
  name: 'BasicLayout',
  components: {
    ToastNotifications
  }
}
</script>
