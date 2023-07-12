import { defineComponent } from 'vue';
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default defineComponent({
  name: 'BaseApp',
  components: {
    MyHeader,
    MyFooter,
  },
});
