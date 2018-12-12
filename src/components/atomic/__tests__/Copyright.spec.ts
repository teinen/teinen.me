import { shallowMount } from "@vue/test-utils";
import Copyright from "@/components/atomic/Copyright.vue";

describe("Copyright.vue", () => {
  it("renders prop value when passed", () => {
    const copyright = "Copyright value";
    const wrapper = shallowMount(Copyright, {
      propsData: { copyrightProp: copyright }
    });
    expect(wrapper.text()).toMatch("© Copyright value");
  });
});
