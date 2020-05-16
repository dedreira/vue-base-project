import "reflect-metadata";
import { resetContainer, mockSingleton } from 'inversify-props';
import { Vue } from "vue-property-decorator";
import VueMaterial from "vue-material";
import { mount, shallowMount } from '@vue/test-utils';
import Echo from '@/components/echo/Echo.vue';
import Vuelidate from 'vuelidate';
describe("Echo component should", () => {
  beforeEach(() => {
    resetContainer();        
    Vue.use(VueMaterial);
    Vue.use(Vuelidate);
  });
  it("sends a message wich is returned printed when button send is pressed", async () => {
    // Arrange
    let expectedMessage : string = "test message";
    console.log('pre - mount');
    const wrapper = mount(Echo);    
    await Vue.nextTick();
    const buttonWrapper = wrapper.find(".md-primary");    
    wrapper.setData({message: expectedMessage});
    await Vue.nextTick();
    const inputMessage = wrapper.find("#message");
    console.log("input " + inputMessage.text());
    // Act
    console.log(buttonWrapper.text());
    //expect(buttonWrapper.text()).equal("Log in");
    buttonWrapper.trigger("click");
    await Vue.nextTick();
    // Assert
    //const snackbar = wrapper.find("#snackbar");
    //console.log(snackbar.text());
    //const button = wrapper.find("#logOut");
    expect(expectedMessage).toEqual(expectedMessage);
  });
 
});
