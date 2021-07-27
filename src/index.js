import $ from 'jquery'
import './1.css'
$(function(){
    $('li:odd').css('backgroundColor','lightgreen');
    $('li:even').css('backgroundColor','lightblue')
})

import login from '../components/login.vue'
import Vue from 'vue'
const vm=new Vue({
    el:'#app',
    render: h=>h(login)
})