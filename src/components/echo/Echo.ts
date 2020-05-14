import { Validate } from 'vuelidate-property-decorators';
import { validationMixin } from 'vuelidate';
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'inversify-props';
@Component({
})
export default class Echo extends Vue {  
  @Validate({ required, maxLength: maxLength(255) })
  message: string = '';

  messageSent: boolean = false;
  sending: boolean = false;
  responseMessage: string = '';

  async mounted() {
  }

  getValidationClass(fieldName: string) {
    const field = this.$v[fieldName];
    if (field) {
      return {
        'md-invalid': field.$invalid && field.$dirty
      }
    }
  }

  clearForm() {
    this.message = '';
    this.$v.$reset();
  }
  sendMessage() {
    this.sending = true    
    this.clearForm();    
    // Instead of this timeout, here you can call your API        
  }
  validateMessage() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.sendMessage();
    }
  }


}
