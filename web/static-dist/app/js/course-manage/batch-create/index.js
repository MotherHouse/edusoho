webpackJsonp(["app/js/course-manage/batch-create/index"],{0:function(e,t){e.exports=jQuery},"4e68e437f5b716377a9d":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TaskListHeaderFixed=t.updateTaskNum=t.TabChange=t.showSettings=t.unpublishTask=t.publishTask=t.deleteTask=t.publishCourse=t.deleteCourse=t.closeCourse=t.taskSortable=t.sortablelist=void 0;var n=a("b334fd7e4c5a19234db2"),r=s(n),i=a("8f840897d9471c8c1fbd"),o=s(i),l=t.sortablelist=function(e){var t=$(e),a=t.sortable("serialize").get(),s=0,n=0,r=0,i=0;t.find(".task-manage-item").each(function(){var e=$(this);e.hasClass("js-task-manage-item")?e.find(".number").length>0&&(s++,e.find(".number").text(s)):e.hasClass("task-manage-unit")?(r++,e.find(".number").text(r)):e.hasClass("task-manage-chapter")?(n++,r=0,e.find(".number").text(n)):e.hasClass("task-manage-lesson")&&(i++,e.find(".number").text(i))}),t.trigger("finished"),$.post(t.data("sortUrl"),{ids:a},function(e){})};t.taskSortable=function(e){$(e).length&&(0,o.default)({element:e,ajax:!1},function(t){l(e)})},t.closeCourse=function(){$("body").on("click",".js-close-course",function(e){var t=$(e.currentTarget);confirm(Translator.trans("course.manage.close_hint"))&&$.post(t.data("check-url"),function(e){e.warn&&!confirm(Translator.trans(e.message))||$.post(t.data("url"),function(e){e.success?((0,r.default)("success",Translator.trans("course.manage.close_success_hint")),location.reload()):(0,r.default)("danger",Translator.trans("course.manage.close_fail_hint")+":"+e.message)})})})},t.deleteCourse=function(){$("body").on("click",".js-delete-course",function(e){confirm(Translator.trans("course.manage.delete_hint"))&&$.post($(e.currentTarget).data("url"),function(e){e.success?((0,r.default)("success",Translator.trans("site.delete_success_hint")),e.redirect?window.location.href=e.redirect:location.reload()):(0,r.default)("danger",Translator.trans("site.delete_fail_hint")+":"+e.message)})})},t.publishCourse=function(){$("body").on("click",".js-publish-course",function(e){confirm(Translator.trans("course.manage.publish_hint"))&&$.post($(e.target).data("url"),function(e){e.success?((0,r.default)("success",Translator.trans("course.manage.task_publish_success_hint")),location.reload()):(0,r.default)("danger",Translator.trans("course.manage.task_publish_fail_hint")+":"+e.message,{delay:5e3})})})},t.deleteTask=function(){$("body").on("click",".delete-item",function(e){if("task"==$(e.currentTarget).data("type")){if(!confirm(Translator.trans("course.manage.task_delete_hint")))return}else if("chapter"==$(e.currentTarget).data("type")&&!confirm(Translator.trans("course.manage.chapter_delete_hint")))return;$.post($(e.currentTarget).data("url"),function(t){t.success?((0,r.default)("success",Translator.trans("site.delete_success_hint")),$(e.target).parents(".task-manage-item").remove(),l("#sortable-list"),$("#sortable-list").children("li").length<1&&$(".js-task-empty").hasClass("hidden")&&$(".js-task-empty").removeClass("hidden"),document.location.reload()):(0,r.default)("danger",Translator.trans("site.delete_fail_hint")+":"+t.message)})})},t.publishTask=function(){$("body").on("click",".publish-item",function(e){$.post($(e.target).data("url"),function(t){if(t.success){var a=$(e.target).closest(".task-manage-item");(0,r.default)("success",Translator.trans("course.manage.task_publish_success_hint")),$(a).find(".publish-item").addClass("hidden"),$(a).find(".delete-item").addClass("hidden"),$(a).find(".unpublish-item").removeClass("hidden"),$(a).find(".publish-status").addClass("hidden")}else(0,r.default)("danger",Translator.trans("course.manage.task_publish_fail_hint")+":"+t.message)})})},t.unpublishTask=function(){$("body").on("click",".unpublish-item",function(e){$.post($(e.target).data("url"),function(t){if(t.success){var a=$(e.target).closest(".task-manage-item");(0,r.default)("success",Translator.trans("course.manage.task_unpublish_success_hint")),$(a).find(".publish-item").removeClass("hidden"),$(a).find(".delete-item").removeClass("hidden"),$(a).find(".unpublish-item").addClass("hidden"),$(a).find(".publish-status").removeClass("hidden")}else(0,r.default)("danger",Translator.trans("course.manage.task_unpublish_fail_hint")+":"+t.message)})})},t.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(e){var t=$(e.currentTarget),a=t.closest(".js-task-manage-item");a.hasClass("active")?a.removeClass("active").find(".js-settings-list").stop().slideUp(500):(a.addClass("active").find(".js-settings-list").stop().slideDown(500),a.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},t.TabChange=function(){$('[data-role="tab"]').click(function(e){var t=$(this);$(t.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},t.updateTaskNum=function(e){},t.TaskListHeaderFixed=function(){var e=$(".js-task-list-header");if(e.length){var t=e.offset().top;$(window).scroll(function(a){$(window).scrollTop()>=t?e.addClass("fixed"):e.removeClass("fixed")})}}},"51f055c8e85ba7c8e9b4":function(e,t,a){"use strict";var s=a("5899c7c7c1283bfb76ec");new(function(e){return e&&e.__esModule?e:{default:e}}(s).default)({element:"#uploader-container"})},"5899c7c7c1283bfb76ec":function(e,t,a){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),r=a("b334fd7e4c5a19234db2"),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=a("4e68e437f5b716377a9d"),l=function(){function e(t){s(this,e),this.element=$(t.element),this.uploader=null,this.files=[],this.$sortable=$("#sortable-list"),this.init()}return n(e,[{key:"init",value:function(){this.initUploader(),this.initEvent()}},{key:"initUploader",value:function(){var e=this,t=this.element;this.uploader=new UploaderSDK({id:t.attr("id"),initUrl:t.data("initUrl"),finishUrl:t.data("finishUrl"),accept:t.data("accept"),process:this.getUploadProcess(),ui:"batch",locale:document.documentElement.lang}),this.uploader.on("file.finish",function(t){e.files.push(t)}),this.uploader.on("error",function(e){var t={F_DUPLICATE:Translator.trans("uploader.file.exist")};e.message||(e.message=t[e.error]),(0,i.default)("danger",e.message)})}},{key:"initEvent",value:function(){var e=this;$(".js-upload-params").on("change",function(t){e.uploader.setProcess(e.getUploadProcess())}),$(".js-batch-create-lesson-btn").on("click",function(t){if(!e.files.length)return void(0,i.default)("danger",Translator.trans("uploader.select_one_file"));var a=$(t.currentTarget);a.button("loading"),e.files.map(function(t,s){var n=!1;s+1==e.files.length&&(n=!0),e.createLesson(a,t,n)})}),$('[data-toggle="popover"]').popover({html:!0})}},{key:"getUploadProcess",value:function(){var e=$(".js-upload-params").get().reduce(function(e,t){return e[$(t).attr("name")]=$(t).find("option:selected").val(),e},{}),t={video:e,document:{type:"html"}};return $("[name=support_mobile]").length>0&&(t.common={supportMobile:$("[name=support_mobile]").val()}),t}},{key:"createLesson",value:function(e,t,a){var s=this;$.ajax({type:"post",url:e.data("url"),async:!1,data:{fileId:t.id},success:function(e){e&&e.error?(0,i.default)("danger",e.error):s.$sortable.append(e.html)},error:function(e){(0,i.default)("danger",Translator.trans("uploader.status.error"))},complete:function(e){a&&((0,o.sortablelist)(s.$sortable),$("#modal").modal("hide"))}})}}]),e}();t.default=l}},["51f055c8e85ba7c8e9b4"]);