<style lang="less" scoped>
    .bar {
      position: fixed;
      right: 0;
      left: 0;
      z-index: 10;
      height: 44px;
      padding-right: 10px;
      padding-left: 10px;
      background-color: #fff;
      border-bottom: 1px solid #ddd;

      -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
    }

    .bar-header-secondary {
      top: 44px;
    }

    .bar-footer {
      bottom: 0;
    }

    .bar-footer-secondary {
      bottom: 44px;
    }

    .bar-footer-secondary-tab {
      bottom: 50px;
    }

    .bar-footer,
    .bar-footer-secondary,
    .bar-footer-secondary-tab {
      border-top: 1px solid #ddd;
      border-bottom: 0;
    }

    .bar-nav {
      top: 0;
    }

    .title {
      position: absolute;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0 -10px;
      font-size: 17px;
      font-weight: 500;
      line-height: 44px;
      color: #000;
      text-align: center;
      white-space: nowrap;
    }

    .title a {
      color: inherit;
    }

    .bar-tab {
      bottom: 0;
      display: table;
      width: 100%;
      height: 50px;
      padding: 0;
      table-layout: fixed;
      border-top: 1px solid #ddd;
      border-bottom: 0;
    }

    .bar-tab .tab-item {
      position: relative;
      display: table-cell;
      width: 1%;
      height: 50px;
      color: #929292;
      text-align: center;
      vertical-align: middle;
    }

    .bar-tab .tab-item.active, .bar-tab .tab-item:active {
      color: #428bca;
    }

    .bar-tab .tab-item .badge {
      position: absolute;
      top: 3px;
      left: 50%;
      vertical-align: top;
    }

    .bar-tab .tab-item .icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .bar-tab .tab-item .icon ~ .tab-label {
      display: block;
      font-size: 11px;
    }

    .bar .btn {
      position: relative;
      top: 7px;
      z-index: 20;
      padding: 6px 12px 7px;
      margin-top: 0;
      font-weight: 400;
    }

    .bar .btn.pull-right {
      margin-left: 10px;
    }

    .bar .btn.pull-left {
      margin-right: 10px;
    }

    .bar .btn-link {
      top: 0;
      padding: 0;
      font-size: 16px;
      line-height: 44px;
      color: #428bca;
      border: 0;
    }

    .bar .btn-link:active, .bar .btn-link.active {
      color: #3071a9;
    }

    .bar .btn-block {
      top: 6px;
      padding: 7px 0;
      margin-bottom: 0;
      font-size: 16px;
    }

    .bar .btn-nav.pull-left {
      margin-left: -5px;
    }

    .bar .btn-nav.pull-left .icon-left-nav {
      margin-right: -3px;
    }

    .bar .btn-nav.pull-right {
      margin-right: -5px;
    }

    .bar .btn-nav.pull-right .icon-right-nav {
      margin-left: -3px;
    }

    .bar .icon {
      position: relative;
      z-index: 20;
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 24px;
    }

    .bar .btn .icon {
      top: 3px;
      padding: 0;
    }

    .bar .title .icon {
      padding: 0;
    }

    .bar .title .icon.icon-caret {
      top: 4px;
      margin-left: -5px;
    }

    .bar input[type="search"] {
      height: 29px;
      margin: 6px 0;
    }

    .bar .segmented-control {
      top: 7px;
      margin: 0 auto;
    }
</style>

<template>
    <nav class="bar bar-tab" v-if="isTabBar">
        <a class="tab-item active" href="#">
            <span class="icon icon-home"></span>
            <span class="tab-label">Home</span>
          </a>
          <a class="tab-item" href="#">
            <span class="icon icon-person"></span>
            <span class="tab-label">Profile</span>
          </a>
          <a class="tab-item" href="#">
            <span class="icon icon-star-filled"></span>
            <span class="tab-label">Favorites</span>
          </a>
          <a class="tab-item" href="#">
            <span class="icon icon-search"></span>
            <span class="tab-label">Search</span>
          </a>
          <a class="tab-item" href="#">
            <span class="icon icon-gear"></span>
            <span class="tab-label">Settings</span>
          </a>
    </nav>

    <header v-else class="bar bar-nav">
        <a class="icon icon-left-nav pull-left"></a>
        <a class="icon icon-compose pull-right"></a>
        <h1 class="title">Title</h1>
    </header>
</template>

<script>
var bar = {
    props: ['type'],

    computed: {
        isTabBar: function() {
            return this.type == 'tab';
        }
    }
};

module.exports = bar;
</script>
