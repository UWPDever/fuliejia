<template>
  <div>
    <div
      data-role="page"
      class="type-interior ui-page ui-page-theme-a ui-page-header-fixed ui-page-footer-fixed ui-page-active"
      
      tabindex="0"
      style="padding-top: 82px; padding-bottom: 108px; min-height: 895px;"
    >
      <div
        data-role="header"
        data-position="fixed"
        role="banner"
        class="ui-header ui-header-fixed slidedown ui-bar-inherit ui-fixed-hidden"
        style
      >
        <div style="background-color:#ffffff; height:80px;">
          <div style="float:left;margin-left:10px; margin-top:10px;">
            <img src="../../static/mynet_files/00547_logo.jpg" height="50px" />
          </div>
          <div style="float:right; margin-top:10px;  ">
            <h3>防伪查询 &nbsp;</h3>
          </div>
          <div style="clear:both;"></div>
        </div>
      </div>
      <div v-if="isload==0" data-role="content" class="ui-content" role="main">
        <div class="content" id="div_cx">
          <div>
            <div class="div_row" style="margin-bottom: 30px; margin-top: 53px;">
              <div
                class="left"
                style="text-align: center; line-height: 1.3em;"
              >欢迎您使用查询验证系统，请点击“确定”按钮获取本次查询结果。</div>
            </div>

            <div class="div_row">
              <div>
                <div @click="onclick" class="ui-btn ui-input-btn ui-corner-all ui-shadow">确定</div>
              </div>
            </div>
            <div style="text-align: center; color: Red; height: 30px; line-height: 30px;">
              <div id="MSG"></div>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>

      <div
        v-else-if="isload==1"
        class="content"
        id="div_result"
        style="display:block;line-height: 22px;"
      >
        <br />
        <strong>尊敬的用户您好：</strong>
        <div id="result" class="fw_table_font">
          您查询的数码为：7346529238487349
          <br />
          <div>您查询的号码已在2019年05月17日11时16分查询过，该号码已失效，请谨防假冒，并请拨打咨询热线021-26095599。</div>
        </div>
        <div class="div_a_btn">
          <a
            href="http://zhsh.co/page/Complaints.aspx?f=MDA1NDc=&amp;url=http://zhsh.co/page/Fac/Check.aspx?f=MDA1NDc=&amp;p=NA==&amp;l=MTY="
            id="linkClt"
            data-ajax="false"
            style="display:none;"
            class="ui-link"
          >假货举报</a>&nbsp;&nbsp;
          <a href="#" style="display: none;" onclick="BK()" class="ui-link">继续查询</a>
        </div>
      </div>
       <div
        v-else-if="isload==2"
        class="content"
        id="div_result"
        style="display:block;line-height: 22px;"
      >
        <br />
        <strong>尊敬的用户您好：</strong>
        <div id="result" class="fw_table_font">
          您查询的数码为：7346529238487349
          <br />
          <div>感谢您购买上海弗列加滤清器有限公司生产的正牌产品，敬请放心使用。</div>
        </div>
        <div class="div_a_btn">
          <a
            href="http://zhsh.co/page/Complaints.aspx?f=MDA1NDc=&amp;url=http://zhsh.co/page/Fac/Check.aspx?f=MDA1NDc=&amp;p=NA==&amp;l=MTY="
            id="linkClt"
            data-ajax="false"
            style="display:none;"
            class="ui-link"
          >假货举报</a>&nbsp;&nbsp;
          <a href="#" style="display: none;" onclick="BK()" class="ui-link">继续查询</a>
        </div>
      </div>

      <div
        data-role="footer"
        class="footer-docs ui-footer ui-footer-fixed slideup ui-bar-inherit ui-fixed-hidden"
        data-position="fixed"
        role="contentinfo"
        style
      >
        <p style="text-align: left;">
          地址：上海浦东杨高北路3595号 邮编：201208
          <br />总机/Tel:021-58657950
          <br />传真/Fax:021-58658066
          <br />网址/Internet：www.shanghaifleetguard.com
        </p>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isload: 0
    };
  },
  methods: {
    onclick() {
      this.isload=2;
      //  var tz = document.getElementById("hidTz").value;
      //       var url = location.href;
      //       var code = getQueryString("code");
      //       alert(url)
      //       var validName = url.substring(url.indexOf("Valid"), url.lastIndexOf("."));
      //       url = url.replace(validName, tz);
      //       window.location.href = url;
    }
  }
};
</script>

<style>
.content {
  text-align: left;
}
</style>



