<template>
  <div id="app">
    {{ message }}
    <element-view></element-view>
    <LayOut></LayOut>
    <container></container>
    <tableCom></tableCom>
    <button-com></button-com>
    <radio-com></radio-com>
    <check-box></check-box>
    <input-com></input-com>
    <login-com></login-com>
    <input-num></input-num>
    <select-com></select-com>
    <caster-com></caster-com>
    <time-picker></time-picker>
    <data-com></data-com>
    <upload-com></upload-com>
    <rate-com></rate-com>
    <form-com></form-com>
    <table-com-vue></table-com-vue>
    <home-work></home-work>
  </div>
</template>
<script>
import HomeWork from "./components/homeWork.vue";
import FormCom from "./components/formCom.vue";
import TableComVue from "./components/tableComVue.vue";
import UploadCom from "./components/uploadCom.vue";
import DataCom from "./components/dataCom.vue";
import CasterCom from "./components/casterCom.vue";
import TimePicker from "./components/timePicker.vue";
import InputNum from "./components/inputNum.vue";
import SelectCom from "./components/selectCom.vue";
import InputCom from "./components/InputCom.vue";
import LoginCom from "./components/loginCom.vue";
import CheckBox from "./components/checkBox.vue";
import RadioCom from "./components/RadioCom.vue";
import ButtonCom from "./components/buttonCom.vue";
import ElementView from "./views/Element/ElementView.vue";
import LayOut from "../src/components/LayOut.vue";
import container from "../src/components/containerComponent.vue";
import tableCom from "./components/tableCom.vue";
import RateCom from "./components/rateCom.vue";

export default {
  components: {
    UploadCom,
    CheckBox,
    RadioCom,
    ButtonCom,
    ElementView,
    LayOut,
    container,
    tableCom,
    InputCom,
    LoginCom,
    InputNum,
    SelectCom,
    CasterCom,
    TimePicker,
    DataCom,
    RateCom,
    FormCom,
    TableComVue,
    HomeWork,
  },
};
</script>

<style>
</style>

