webpackJsonp(["app/js/settings/setup/index"],[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n("b334fd7e4c5a19234db2"),i=a(r),s=$("#setup-form"),o=$(".js-submit-setup-form");if(s.length){var u=s.validate({email:{required:!0,es_email:!0,es_remote:{type:"POST"}},nickname:{required:!0,minlength:4,maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}}});o.click(function(){u.form()&&(o.button("loadding"),$.post(s.attr("action"),s.serialize(),function(){(0,i.default)("success",Translator.trans("设置帐号成功，正在跳转")),window.location.href=o.data("goto")}).error(function(){o.button("reset"),(0,i.default)("danger",Translator.trans("设置帐号失败，请重试"))}))})}}]);