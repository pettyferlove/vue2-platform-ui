<template>
  <div class="user-welcome">
    <div class="user-welcome-detail">
      <div class="user-welcome-detail-main">
        <div class="user-welcome-detail-main-row">
          <div class="user-welcome-detail-main-row-content">
            <div class="header-content">
              <div class="avatar">
                <span class="avatar-circle">
                  <img src="../../assets/img/user-petty.jpg" height="72">
                </span>
              </div>
              <div class="content">
                <div class="content-title">早安，曲丽丽，祝你开心每一天！</div>
                <div class="content-detail">Java开发工程师 | 某某公司-某某部门-某某项目组-Java开发工程师</div>
              </div>
            </div>
          </div>
          <div class="user-welcome-detail-main-row-extra">
            <div class="extra-content">
              <div><p>项目数</p>
                <p>56</p></div>
              <div><p>团队内排名</p>
                <p>8<span> / 24</span></p></div>
              <div><p>项目访问</p>
                <p>2,223</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: {ElRow},
    name: 'VpUserWelcome'
  }
</script>

