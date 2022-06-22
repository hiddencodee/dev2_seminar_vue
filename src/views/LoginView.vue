<template>
  <form>
    <!-- Email input -->
    <MDBInput
      type="email"
      label="Email address"
      id="form1Email"
      v-model="form1Email"
      wrapperClass="mb-4"
    />
    <!-- Password input -->
    <MDBInput
      type="password"
      label="Password"
      id="form1Password"
      v-model="form1Password"
      wrapperClass="mb-4"
    />
    <!-- 2 column grid layout for inline styling -->
    <MDBRow class="mb-4">
      <MDBCol class="d-flex justify-content-center">
        <!-- Checkbox -->
        <MDBCheckbox
          label="Remember me"
          id="form1LoginCheck"
          v-model="form1LoginCheck"
          wrapperClass="mb-3 mb-md-0"
        />
      </MDBCol>
      <MDBCol>
        <!-- Simple link -->
        <a href="#!">Forgot password?</a>
      </MDBCol>
    </MDBRow>
    <!-- Submit button -->
    <MDBBtn color="primary" block> Sign in </MDBBtn>
  </form>
</template>
<script>
import { MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBBtn } from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
  },
  setup() {
    const form1Email = ref("");
    const form1Password = ref("");
    const form1LoginCheck = ref(true);

    return {
      form1Email,
      form1Password,
      form1LoginCheck,
    };
  },
};
</script>
