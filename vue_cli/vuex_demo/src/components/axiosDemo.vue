<template>
  <div>
    <button @click="getAxios">axios 请求</button>
    <p>{{ info }}</p>

    <button @click="getAllUser">getAllUser</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: "",
      listUser: [],
    };
  },
  methods: {
    getAxios() {
      axios
        .get("localhost:9090/user/findAllUsers")
        .then((res) => {
          console.log(res);
          this.info = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    findAllUser() {
      axios.get("http://localhost:9090/user").then((res) => {
        console.log(res);
        this.listUser = res.data.data;
      });
    },
  },
  mounted() {
    this.findAllUser();
  },
};
</script>