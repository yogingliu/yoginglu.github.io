(window.webpackJsonp=window.webpackJsonp||[]).push([[18,23],{250:function(e,t,o){"use strict";o.r(t);var n=o(28),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 16 14",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{opacity:"0.3"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z"}})])])])}),[],!1,null,null,null);t.default=component.exports},259:function(e,t,o){"use strict";o.r(t);o(191),o(19),o(41),o(48);var n={components:{SvgIconQuote:o(250).default},props:{customerFeedbackCardIndex:{type:Number,default:1},customerName:{type:String,default:"顧客"},customerRemark:{type:String,default:""},feedbackContent:{type:String,default:"載入內容錯誤"}},computed:{customerPhotoComponent:function(){var e="";return e=this.customerFeedbackCardIndex%3==0?"SvgPersonFaceRightRound3":this.customerFeedbackCardIndex%3==2?"SvgPersonFaceRightRound2":"SvgPersonFaceRightRound1",function(){return o(301)("./".concat(e,".vue"))}}}},c=(o(302),o(28)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"customer-feedback-card flex-grow-1"},[o("div",{staticClass:"d-flex w-100 p-4"},[o(e.customerPhotoComponent,{tag:"component",staticClass:"customer-feedback-card-photo"}),e._v(" "),o("div",{staticClass:"ml-4 text-left d-flex"},[o("div",{staticClass:"m-auto"},[o("div",[o("span",[e._v(e._s(e.customerName))])]),e._v(" "),o("div",[o("span",{staticClass:"text-muted font-size-point-nine"},[e._v(e._s(e.customerRemark))])])])])],1),e._v(" "),o("div",{staticClass:"d-flex px-5"},[o("div",{staticClass:"mt-3 mx-2"},[o("SvgIconQuote",{staticClass:"feedback-card-quote-icon"})],1),e._v(" "),o("div",{staticClass:"pl-4 py-4 text-left font-size-point-nine"},[e._v("\n            "+e._s(e.feedbackContent)+"\n        ")])])])}),[],!1,null,"056f393d",null);t.default=component.exports;installComponents(component,{SvgIconQuote:o(250).default})},291:function(e,t,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(53).default)("4adff43d",content,!0,{sourceMap:!1})},301:function(e,t,o){var map={"./SvgLogoShopee.vue":[97],"./SvgLogoYugengWithName.vue":[98],"./SvgManFaceLeftRound.vue":[269,9],"./SvgPersonFaceRightRound1.vue":[270,10],"./SvgPersonFaceRightRound2.vue":[271,11],"./SvgPersonFaceRightRound3.vue":[272,12],"./SvgTopRightBackgroud.vue":[253,13],"./SvgWomanFaceRightRound.vue":[273,14],"./icon/SvgIconFile.vue":[274,0],"./icon/SvgIconFolder.vue":[275,1],"./icon/SvgIconHeart.vue":[276,2],"./icon/SvgIconMenu.vue":[99],"./icon/SvgIconMoney.vue":[277,3],"./icon/SvgIconPencil.vue":[278,4],"./icon/SvgIconPhone.vue":[279,5],"./icon/SvgIconPhonePlus.vue":[280,6],"./icon/SvgIconQuote.vue":[250],"./icon/SvgIconThumbUp.vue":[281,7],"./icon/SvgIconTick.vue":[249,8]};function n(e){if(!o.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return Promise.all(t.slice(1).map(o.e)).then((function(){return o(n)}))}n.keys=function(){return Object.keys(map)},n.id=301,e.exports=n},302:function(e,t,o){"use strict";o(291)},303:function(e,t,o){var n=o(52)(!1);n.push([e.i,".customer-feedback-card[data-v-056f393d]{min-width:5rem;min-height:5rem;box-shadow:0 .8rem 1.2rem rgba(41,41,42,.07);border-radius:.5rem;width:100%;margin:0 1rem}@media screen and (max-width:576px){.customer-feedback-card[data-v-056f393d]{min-width:auto;width:350px;margin:15px auto}}.customer-feedback-card-photo[data-v-056f393d]{width:6rem;height:6rem}.feedback-card-quote-icon[data-v-056f393d]{fill:#2ec5ce;width:1.6rem;height:1.6rem}",""]),e.exports=n}}]);