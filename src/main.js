import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

import {
  Spin,
  Drawer,
  Alert,
  Avatar,
  Checkbox,
  Badge,
  Modal,
  Button,
  Tabs,
  Table,
  Card,
  Select,
  Col,
  Radio,
  Carousel,
  Form,
  Input,
  InputNumber,
  Layout,
  List,
  Popover,
  AutoComplete,
  Menu,
  Dropdown,
  Progress,
  Tag,
  DatePicker,
  Steps,
  Timeline,
  Skeleton,
  Icon,
  Row, Upload, Switch, Tooltip, Affix, notification, Collapse, Empty, message,Calendar


} from 'ant-design-vue';
Vue.prototype.$notification = notification;
Vue.use(Alert);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Popover);
Vue.use(Form);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(Menu);
Vue.use(Tag);
Vue.use(Carousel);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Checkbox);
Vue.use(Drawer)
Vue.use(AutoComplete)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Dropdown)
Vue.use(Progress)
Vue.use(DatePicker)
Vue.use(Steps)
Vue.use(Timeline)
Vue.use(Skeleton)
Vue.use(Icon)
Vue.use(Spin)
Vue.use(Row)
Vue.use(Upload)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Affix)
Vue.use(notification)
Vue.use(Collapse)
Vue.use(Empty)
Vue.use(message)
Vue.use(Calendar)
Vue.config.productionTip = false

sync(store, router);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
