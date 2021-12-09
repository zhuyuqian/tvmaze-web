import Vue from 'vue';
import {
  Row,
  Col,
  Pagination,
  Input,
  Tooltip,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Popover,
  Button,
  Dialog,
  Switch,
  MessageBox
} from 'element-ui';

Vue.prototype.$msgbox = MessageBox;
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
Vue.use(Tooltip);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Switch);
