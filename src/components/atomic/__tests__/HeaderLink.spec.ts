import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import HeaderLink from "@/components/atomic/HeaderLink.vue";

describe("HeaderLink.vue", () => {
  it("renders props when passed", () => {
    // Set up
    const title = "ABOUT";
    const url = "/about"

    const wrapper = shallowMount(HeaderLink, {
      propsData: { titleProp: title, urlProp: url },
      stubs: { RouterLink: RouterLinkStub }
    });

    // Verify
    const link = wrapper.find(RouterLinkStub);
    expect(link.text()).toBe("ABOUT");
    expect(link.props().to).toBe("/about");
  });
});
