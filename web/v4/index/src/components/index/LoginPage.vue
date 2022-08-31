<template>
  <v-container class="container-3d k-absolute k-x-transform-center">

    <v-card class="mb-16 mx-auto roll-180-x" width="420" tile elevation="10">
      <v-card
          tile
          height="720px"
          elevation="0"
          class="height-shrink k-overflow-hidden"
      >
        <img
            class="k-absolute img-move k-top-0"
            src="../../assets/index/logincard/BuradirenaMiriize.jpg"
        />
      </v-card>

      <v-form
          ref="formQuery"
          method="post"
          action="/demo1"
          v-show="this.$store.state.displayLogin"
          v-model="valid1"
          class="px-8 py-6 form-class"
      >

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-lumx"
            background-color="transparent"
            clear-icon="mdi-close"
            counter
            maxlength="6"
            clearable
            color="light-blue darken-3"
            hide-details="auto"
            label="约稿ID"
            :rules="[rules.loginID]"
            type="text"
            v-model="queryData.queryId"
        ></v-text-field>

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-lumx"
            background-color="transparent"
            clear-icon="mdi-close"
            clearable
            color="light-blue darken-3"
            hide-details="auto"
            label="密码"
            type="password"
            v-model="queryData.queryPwd"
        ></v-text-field>

        <v-btn
            dark
            type="button"
            @click="query"
        >
          查询
        </v-btn>

        <a
            @click="showR"
            class="ml-8"
            href="javascript:void(0);"
        >
          <span>还没有排单？ >> 去排单</span>
        </a>

      </v-form>

      <v-form
          ref="formRegister"
          v-show="this.$store.state.displayRegister"
          class="px-8 py-6 form-class"
          method="post"
          action="/demo2"
      >

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-pen-minus"
            background-color="transparent"
            clear-icon="mdi-close"
            clearable
            color="light-blue darken-3"
            hide-details="auto"
            label="昵称"
            :rules="[rules.required,rules.counter]"
            type="text"
            v-model="registerData.userName"
        ></v-text-field>

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-lock-check"
            background-color="transparent"
            clear-icon="mdi-close"
            clearable
            color="deep-purple lighten-1"
            hide-details="auto"
            label="设置订单密码"
            v-model="registerData.password"
            :rules="[rules.pwdRegister]"
            type="password"
        ></v-text-field>

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-lock-pattern"
            background-color="transparent"
            clear-icon="mdi-close"
            clearable
            color="green"
            hide-details="auto"
            label="确认登录密码"
            v-model="registerData.pwdCheck"
            :rules="[checkPwd]"
            type="password"
        ></v-text-field>

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-gmail"
            background-color="transparent"
            clear-icon="mdi-close"
            clearable
            color="orange darken-2"
            hide-details="auto"
            label="您的有效邮箱地址，用于接收密码等信息"
            :rules="[rules.email]"
            type="text"
            v-model="registerData.mailAddress"
        ></v-text-field>

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-file-document-edit-outline"
            background-color="transparent"
            clear-icon="mdi-close"
            clearable
            color="purple lighten-1"
            hide-details="auto"
            label="以何种方式提供反馈与接收反馈"
            :rules="[rules.contactor]"
            type="text"
            v-model="registerData.feedbackMethod"
        ></v-text-field>

        <v-text-field
            class="pb-4"
            prepend-inner-icon="mdi-calendar-clock"
            background-color="transparent"
            clear-icon="mdi-close"
            clearable
            color="green darken-3"
            hide-details="auto"
            label="您能接受的最终交付日期"
            :rules="[rules.deadline]"
            type="text"
            v-model="registerData.deadLine"
        ></v-text-field>

        <v-select
            background-color="transparent"
            prepend-inner-icon="mdi-drag-variant"
            color="black"
            label="选择您的约稿类型"
            type="radio"
            :items="transactionTypes"
            item-text="type"
            item-value="abbr"
            v-model="registerData.illustType"
            :rules="[rules.illustType]"
        ></v-select>

        <v-select
            background-color="transparent"
            prepend-inner-icon="mdi-drag-variant"
            color="black"
            label="是否需要背景"
            type="radio"
            :items="backgroundRequired"
            item-text="type"
            item-value="abbr"
            v-model="registerData.background"
            :rules="[rules.background]"
        ></v-select>

        <v-select
            background-color="transparent"
            prepend-inner-icon="mdi-drag-variant"
            color="indigo darken-3"
            label="您的预算（CNY）"
            type="radio"
            :items="budget"
            item-text="type"
            item-value="type"
            v-model="registerData.budget"
        ></v-select>

        <v-select
            background-color="transparent"
            prepend-inner-icon="mdi-drag-variant"
            color="indigo darken-3"
            label="您将授权画师以何种发布权限"
            type="radio"
            :items="authorizedRelease"
            item-text="type"
            item-value="abbr"
            v-model="registerData.authorizedRelease"
            :rules="[rules.authorizedRelease]"
        ></v-select>

        <v-select
            background-color="transparent"
            prepend-inner-icon="mdi-drag-variant"
            color="indigo darken-3"
            label="发布时的打码状况（如果允许发布）"
            type="radio"
            :items="maskType"
            item-text="type"
            item-value="abbr"
            v-model="registerData.maskType"
        ></v-select>

        <v-select
            background-color="transparent"
            prepend-inner-icon="mdi-drag-variant"
            color="indigo darken-3"
            label="您期望使用哪种汇款方式"
            type="radio"
            multiple
            chips
            :items="paymentInstrument"
            item-text="type"
            item-value="abbr"
            v-model="registerData.paymentInstrument"
        ></v-select>

        <v-select
            background-color="transparent"
            prepend-inner-icon="mdi-drag-variant"
            color="purple"
            label="最终交付时您希望得到的图像格式："
            type="radio"
            multiple
            chips
            :items="imgFormat"
            item-text="type"
            item-value="abbr"
            v-model="registerData.imgFormat"
            :rules="[rules.imgFormat]"
        ></v-select>

        <v-textarea
            v-model="registerData.comments"
            type="text"
            prepend-inner-icon="mdi-archive-edit-outline"
            label="备注/绘制要求"
            counter
            maxlength="2000"
            color="brown darken-2"
            background-color="transparent"
            placeholder="此处为备注信息，在这里，您应当提出您自身对画师的要求，尽可能详细的告知画师应当画成何种风格，以及提醒画师在绘制当中应当注意的地方，比如：当您提供的例图中人物的瞳色底色不明显或过于复杂时，您应当提供文字描述或者更为明显的例图来指明正确的底色，否则画师将以自己的颜色判断基准进行上色（当然，这些细节画师在绘制过程中应当积极的向甲方进行咨询）。注意，您可以提出阶段性成品的撤销请求（即重画），但是否重画将由画师依据工作量决定，因此请您务必详尽的描述绘制要求，以免浪费彼此的时间。"
        >

        </v-textarea>

        <v-radio-group>
          <v-radio
              class="text-body-2"
              label='选中此处即表明您已完整阅读并了解《约稿规则与流程》中阐述的各个事项'
              color="red darken-3"
              value="yes"
              @click="know=false"
          ></v-radio>
        </v-radio-group>

        <v-btn
            color="grey darken-4"
            class="white--text"
            type="button"
            @click="register"
            :disabled="know"
        >
          提交
        </v-btn>

        <a
            @click="showL"
            class="ml-8"
            href="javascript:void(0);"
        >
          <span>已有排单？ >> 去查询进度</span>
        </a>

      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",

  data: () => ({
    submitDisabled: false,
    pwd1: "",
    pwd2: "",
    valid1: true,
    valid2: true,
    know:true,

    transactionTypes: [
      {type: '插画', abbr: 'Illustration'},
      {type: '同人（立绘）', abbr: 'Illustration'},
      {type: '三视图', abbr: 'ThreeView'},
      {type: '半身图', abbr: 'HalfBody'},
      {type: '头像', abbr: 'Avatar'},
      {type: 'Live2D', abbr: 'L2D'},
      {type: '手书/漫画/分镜分页', abbr: 'Comic'},
      {type: 'UI设计', abbr: 'UI'},
      {type: '动图GIF', abbr: 'DynamicImg'},
    ],

    backgroundRequired: [
      {type: '需要背景', abbr: 'background-1'},
      {type: '不需要背景', abbr: 'background-0'},
      {type: '加背景的 和 无背景的 我都要！', abbr: 'background-2'},
    ],

    budget: [
      {type: '10-50'},
      {type: '50-100'},
      {type: '100-200'},
      {type: '200-500'},
      {type: '500-1000'},
      {type: '1000-2000'},
      {type: '2000+'}
    ],

    imgFormat: [
      {type: "jpg", abbr: "jpg"},
      {type: "png", abbr: "png"},
      {type: "gif", abbr: "gif"},
      {type: "psd", abbr: "psd"},
      {type: "sai", abbr: "sai"},
      {type: "csp", abbr: "csp"},
    ],

    authorizedRelease: [
      {type: "禁止发布", abbr: 'prohibit'},
      {type: "与画师协商发布时间，该时间内可自由发布", abbr: 'consult'},
      {type: "自由发布", abbr: 'freedom'}
    ],

    maskType: [
      {type: "不打码", abbr: 'no'},
      {type: "轻量打码", abbr: 'light'},
      {type: "中度打码", abbr: 'moderate'},
      {type: "厚码", abbr: 'severe'}
    ],

    paymentInstrument: [
      {type: "微信", abbr: "wxPay"},
      {type: "支付宝", abbr: "aliPay"},
      {type: "银行汇款", abbr: "p2p"},
      {type: "paypal", abbr: "paypal"},
      {type: "line pay", abbr: "line"},
      {type: "其它", abbr: "else"},
    ],

    registerData: {
      userName: "",
      password: "",
      pwdCheck: "",
      mailAddress: "",
      feedbackMethod: "",
      deadLine: "",
      illustType: "",
      background: "",
      budget: "",
      authorizedRelease: "",
      maskType: "",
      paymentInstrument: "",
      imgFormat: "",
      comments: "",
    },

    queryData: {
      queryId: "",
      queryPwd: ""
    },

    rules: {
      required: value => !!value || '不可以为空哦',
      illustType:value=>!!value||'您未选择约稿类型',
      background:value=>!!value||'是否需要背景？',
      authorizedRelease:value=>!!value||'您未选择授予画师何种发布权限',
      imgFormat:value=>!!value||'您未选择最终交付需要的文件格式',
      counter: value => value.length <= 20 || '最长不可以超过20个字符なのだ！',
      email: value => {
        const pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        return pattern.test(value) || '格式示例：123abc@abc.com'
      },
      contactor: value => {
        const cPattern = /^[^\s]{1,10}=[^\s]{1,20}$/
        return cPattern.test(value) || "格式示例：微信=123456789"
      },
      deadline: value => {
        const dPattern = /^\d{4}-\d{1,2}-\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}$/
        return dPattern.test(value) || "格式示例：2022-1-1 18:00:00"
      },
      pwdRegister: value => {
        const pRPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/
        return pRPattern.test(value) || "必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-16 之间"
      },
      loginID: value => {
        const idPattern = /^\d{6}$/
        return idPattern.test(value) || "格式示例：123456"
      },
    }
  }),

  methods: {
    checkPwd() {
      if (this.$data.registerData.password
          != this.$data.registerData.pwdCheck)
        return "两次密码输入不一致"
      else
        return true
    },
    register() {
      if (this.$refs.formRegister.validate()) {
        axios({
          url: "/demo1",
          method: "post",
          baseURL: "http://localhost/ajax_refrence_war/",
          data: this.$data.registerData
        })
      }
    },
    query() {
      if (this.$refs.formQuery.validate()) {
        axios({
          url: "/demo1",
          method: "post",
          baseURL: "http://localhost/ajax_refrence_war/",
          data: this.$data.queryData
        })
      }
    },
    showL(){
      this.$store.commit('showLogin')
    },
    showR(){
      this.$store.commit('showRegister')
    }
  }
}
</script>

<style scoped>
@keyframes img-moving {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-14%);
  }
}

@keyframes img-height-shrink {
  to {
    height: 110px;
  }
}

.height-shrink {
  animation: 1.5s cubic-bezier(.38, .05, .41, .94) forwards img-height-shrink;
}

.img-move {
  width: 420px;
  animation: 30s linear .4s forwards img-moving;
}

.form-class {
  font-family: "汉仪文黑-85W", sans-serif;
}

.container-3d {
  transform-style: preserve-3d;
  perspective: 5000px;
}
</style>











