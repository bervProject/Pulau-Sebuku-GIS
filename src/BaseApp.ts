import Vue from 'vue';
import Components from 'vue-class-component';
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

@Components({
  name: 'BaseApp',
  components: {
    MyHeader,
    MyFooter,
  },
})
export default class BaseApp extends Vue {
}
