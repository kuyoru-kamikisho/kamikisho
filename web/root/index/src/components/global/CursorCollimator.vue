<template>
  <div class="mouse-rotate">
    <div :style="xy" id="mouse-inner">
      <div id="mouse" class="big-roll">
        <div class="small-roll"><span class="short-line short-line1"></span> <span
            class="short-line short-line2"></span> <span class="short-line short-line3"></span> <span
            class="short-line short-line4"></span>
          <div :style="rollit">
            <div class="focus-roll roll-isfocus"><span class="shizi-static shizi-1"></span> <span
                class="shizi-static shizi-2"></span> <span class="shizi-static shizi-3"></span> <span
                class="shizi-static shizi-4"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CursorCollimator",
  data: () => ({
    xy: "opacity:0;",
    rollit: "left: 50%;position: absolute;top: 50%;animation: 4s linear 0s infinite forwards rrr;"
  }),
  methods: {
    xyFnc(xy) {
      this.$data.xy = xy
    },
    isfocus() {
      this.$data.rollit = "left: 50%;position: absolute;top: 50%;animation: 1.5s linear 0s infinite forwards rrr;"
    },
    nofocus() {
      this.$data.rollit = "left: 50%;position: absolute;top: 50%;animation: 4s linear 0s infinite forwards rrr;"
    },
    cursorP() {
      let _this = this;
      let clear = null;
      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let s = "transform: translate(" + x + "px," + y + "px);";
        _this.xyFnc(s)

        clearTimeout(clear)
        clear = setTimeout(() => {
          s = "transform: translate(" + x + "px," + y + "px);opacity:0;";
          _this.xyFnc(s)
        }, 4000)
      }
      document.onmousedown = function (e) {
        clearTimeout(clear)
        let x = e.clientX;
        let y = e.clientY;
        let r = 1.3
        let s = "transform: translate(" + x + "px," + y + "px) scale(" + r + ");";
        _this.xyFnc(s)
        _this.isfocus()
      }
      document.onmouseup = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let r = 1.0;
        let s = "transform: translate(" + x + "px," + y + "px) scale(" + r + ");";
        _this.xyFnc(s)
        _this.nofocus()

        clearTimeout(clear)
        clear = setTimeout(() => {
          s = "transform: translate(" + x + "px," + y + "px);opacity:0;";
          _this.xyFnc(s)
        }, 4000)
      }
    }
  },
  mounted() {
    this.cursorP()
  },
}
</script>

<style lang="less">
.mouse-rotate {
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 999 !important;
  top: 0;
  left: 0;
  position: fixed;
}

div#mouse-inner {
  position: absolute;
  transition: transform .25s ease, opacity .4s ease;
}

.small-roll, div#mouse {
  box-sizing: border-box;
  position: absolute;
}

div#mouse {
  border: 3px solid red;
  border-radius: 50%;
  height: 0;
  width: 0;
}

.focus-roll.roll-isfocus, .small-roll {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.small-roll {
  border: 1px solid red;
  border-radius: 50%;
  height: 25px;
  width: 25px;
}

.small-roll, div#mouse {
  box-sizing: border-box;
  position: absolute;
}

span.short-line.short-line1 {
  left: 50%;
  top: 50%;
}

span.short-line {
  background: red;
  display: inline-block;
  height: 18px;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 1px;
}

span.short-line.short-line2 {
  height: 1px;
  left: 50%;
  top: 50%;
  width: 18px;
}

span.short-line.short-line3, span.short-line.short-line4 {
  display: none;
}

.rxit {
  left: 50%;
  position: absolute;
  top: 50%;
}

.focus-roll.roll-isfocus {
  border: 2px solid red;
  border-radius: 50%;
  height: 44px;
  position: absolute;
  width: 44px;
}

span.shizi-static.shizi-1 {
  left: -7%;
  top: 50%;
}

span.shizi-static {
  background: red;
  display: inline-block;
  height: 2px;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 14px;
}

span.shizi-static.shizi-2 {
  height: 14px;
  left: 50%;
  top: 107%;
  width: 2px;
}

span.shizi-static.shizi-3 {
  left: 107%;
  top: 50%;
}

span.shizi-static.shizi-4 {
  height: 14px;
  left: 50%;
  top: -7%;
  width: 2px;
}

@keyframes rrr {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rollit {
  left: 50%;
  position: absolute;
  top: 50%;
  animation: 4s linear 0s infinite forwards rrr;
}

.rollfast {
  animation: 1.5s linear 0s infinite forwards rrr;
}
</style>