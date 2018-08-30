/**
 * navigationLinks
 *   - Note: use "none" for no link
 *   - Note2: Max subMenu Level is 2 curretly
 */
export const navigationLinks = {
  home : {
    label: "Home",
    link: "/",
    subMenu: {},
  },
  about : {
    label: "About",
    link: "/about",
    subMenu: {},
  },
  chatbot: {
    label: "Chatbot",
    link: "/chatbot",
    subMenu: {},
  },
  api: {
    label: "API's",
    link: "none",
    subMenu: {
      giphy: {
        label: "Giphy",
        link: "/giphy",
        subMenu: {}
      },
      googlemaps: {
        label: "Google Maps",
        link: "/google",
        subMenu: {},
      }
    }
  }
}