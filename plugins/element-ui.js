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
  MessageBox,
  Message,
  Scrollbar,
  Steps,
  Step,
  Divider,
  Form,
  FormItem
} from 'element-ui';

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;


Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Input);
Vue.use(Divider);
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
Vue.use(Scrollbar);
Vue.use(Steps);
Vue.use(Step);
