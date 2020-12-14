<template>
  <div :class="[{'closed-sidebar-open': isOpen},'app-header','header-shadow']">
    <div class="logo-src" />
    <div :class="[{'header-menu-open': isOpenMobileMenu}, 'app-header__content']">
      <div class="app-header-left">
        <SearchBox />
      </div>
      <div class="app-header-right">
        <UserArea />
      </div>
    </div>
    <div class="app-header__mobile-menu">
      <div>
        <button
          type="button"
          class="hamburger close-sidebar-btn hamburger--elastic"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
      <span>
        <b-button
          class="btn-icon btn-icon-only"
          variant="primary"
          size="sm"
          :class="{ active: isOpenMobileMenu }"
          @click="isOpenMobileMenu = !isOpenMobileMenu"
        >
          <div class="btn-icon-wrapper">
            <font-awesome-icon icon="ellipsis-v" />
          </div>
        </b-button>
      </span>
    </div>
  </div>
</template>

<script>
import SearchBox from "./Header/SearchBox";
import UserArea from "./Header/HeaderUserArea";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisV);
export default {
  name: "Header",
  components: {
    SearchBox,
    UserArea,
    "font-awesome-icon": FontAwesomeIcon
  },

  data() {
    return {
      isOpen: false,
      isOpenMobileMenu: false
    };
  },
  props: {},
  methods: {

    toggleMobile2() {
      // const el = document.body;
      this.isOpenMobileMenu = !this.isOpenMobileMenu;

      // if (this.isOpenMobileMenu) {
      //   el.classList.add(className);
      // } else {
      //   el.classList.remove(className);
      // }
    }
  }
};
</script>
