import Cookies from 'js-cookie';
import notify from 'common/notify';
import Api from 'common/api';

const PCSwitcher = $('.js-switch-pc');
const MobileSwitcher = $('.js-switch-mobile');
if (PCSwitcher.length) {
  PCSwitcher.on('click', () => {
    Cookies.set('PCVersion', 1);
    window.location.reload();
  });
}
if (MobileSwitcher.length) {
  MobileSwitcher.on('click', () => {
    Cookies.remove('PCVersion');
    window.location.reload();
  });
}


$('.js-back').click(() => {
  if (history.length !== 1) {
    history.go(-1);
  } else {
    location.href = '/';
  }
});

$('body').on('click', '.js-user-nav-dropdown', (event) => {
  event.stopPropagation();
});


$('.js-inform-tab').click(function(e) {
  const $this = $(this);
  e.preventDefault();
  $this.tab('show');
  const id = $this[0].id;
  const isEmpty = $('.tab-pane.active').find('.js-inform-empty').length;
  const isActive = $this.hasClass('active');
  if (id === 'conversation' && !isEmpty && !isActive) {
    Api.conversation.search().then((res) => {
      const $conversation = $('.js-inform-conversation');
      $conversation.empty();
      informShow($conversation, res, false);
     }).catch((res) => {
      // 异常捕获
      console.log('catch', res.responseJSON.error.message);
    })
  }
  if (id === 'newNotification' && !isEmpty && !isActive) {
    Api.newNotification.search().then((res) => {
      const $newNotification = $('.js-inform-newNotification');
      $newNotification.empty();
      informShow($newNotification, res, true);
    }).catch((res) => {
      // 异常捕获
      console.log('catch', res.responseJSON.error.message);
    })
  }
  $this.addClass('active').siblings().removeClass('active');
})

$(document).ajaxSend((event, xhr, options) => {
  const isNotificationUrl = options.url === "/api/newNotifications";
  const isMessageUrl = options.url === "/api/conversations";
  // 加载loading效果
  if (isNotificationUrl || isMessageUrl) {
    const $dom = $('.js-inform-loading');
    const loading = cd.loading();
    $dom.removeClass('hidden');
    $dom.html(loading);
  }
});

Api.newNotification.search().then((res) => {
  const $newNotification = $('.js-inform-newNotification');
  informShow($newNotification, res, true);
 }).catch((res) => {
  // 异常捕获
  console.log('catch', res.responseJSON.error.message);
})

const informShow = ($dom, res, flag) => {
  $('.tab-pane.active').find('.js-inform-loading').addClass('hidden');
  $dom.append(res);
  if (flag) {
    $dom.find('.notification-footer').addClass('hidden');
    $dom.find('.pull-left').addClass('hidden');
  }
}

$('.js-user-nav-dropdown').on('click', '.js-inform-notification', (event) => {
  const $item = $(event.currentTarget);
  window.open($item.data('url'));
})
