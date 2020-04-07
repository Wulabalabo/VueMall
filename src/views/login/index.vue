<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4 m-auto pt-5">
          <div class="card mt-5">
            <div class="card-header bg-white">
              <h3 class="text-center mb-0 text-secondary">UNI-ADMIN</h3>
            </div>
            <div class="card-body">
              <el-form ref="ruleForm" :rules="rules" :model="form">
                <el-form-item prop="username">
                  <el-input v-model="form.username" size="medium" placeholder="User Name"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="form.password"
                    size="medium"
                    type="password"
                    placeholder="Password"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="medium" class="w-100" @click="submit">Login Now</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "Please Input User Name", trigger: "blur" }
        ],
        password: [
          { required: true, message: "Please Input Password", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
      submit(){
          this.$refs.ruleForm.validate((e)=>{
              console.log(e);
              if(!e) return;
              this.$router.push({name:'index'});
          });
      }
  }
};
</script>
