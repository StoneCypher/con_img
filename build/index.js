"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function image(url) {
  var _this = this;

  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


  var image = new Image();

  image.onload = function () {
    console.log("%c+", "font-size: 1px; padding: " + Math.floor(image.height * scale / 2) + "px " + Math.floor(image.width * scale / 2) + "px; line-height: " + image.height * scale + "px; background: url(" + url + "); background-size: " + _this.width * scale + "px " + _this.height * scale + "px; color: transparent;");
  };

  image.src = url;
}

exports.image = image;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbWFnZSIsInVybCIsInNjYWxlIiwiSW1hZ2UiLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLFNBQVNBLEtBQVQsQ0FBZUMsR0FBZixFQUErQjtBQUFBOztBQUFBLE1BQVhDLEtBQVcsdUVBQUgsQ0FBRzs7O0FBRTdCLE1BQUlGLFFBQVEsSUFBSUcsS0FBSixFQUFaOztBQUVBSCxRQUFNSSxNQUFOLEdBQWUsWUFBTTtBQUNuQkMsWUFBUUMsR0FBUixDQUFZLEtBQVosZ0NBQStDQyxLQUFLQyxLQUFMLENBQVlSLE1BQU1TLE1BQU4sR0FBZVAsS0FBaEIsR0FBdUIsQ0FBbEMsQ0FBL0MsV0FBeUZLLEtBQUtDLEtBQUwsQ0FBWVIsTUFBTVUsS0FBTixHQUFjUixLQUFmLEdBQXNCLENBQWpDLENBQXpGLHlCQUFnSkYsTUFBTVMsTUFBTixHQUFlUCxLQUEvSiw0QkFBMkxELEdBQTNMLDRCQUFzTixNQUFLUyxLQUFMLEdBQWFSLEtBQW5PLFdBQWdQLE1BQUtPLE1BQUwsR0FBY1AsS0FBOVA7QUFDRCxHQUZEOztBQUlBRixRQUFNVyxHQUFOLEdBQVlWLEdBQVo7QUFFRDs7UUFNUUQsSyxHQUFBQSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBpbWFnZSh1cmwsIHNjYWxlID0gMSkge1xuXG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIiVjK1wiLCBgZm9udC1zaXplOiAxcHg7IHBhZGRpbmc6ICR7TWF0aC5mbG9vcigoaW1hZ2UuaGVpZ2h0ICogc2NhbGUpLzIpfXB4ICR7TWF0aC5mbG9vcigoaW1hZ2Uud2lkdGggKiBzY2FsZSkvMil9cHg7IGxpbmUtaGVpZ2h0OiAke2ltYWdlLmhlaWdodCAqIHNjYWxlfXB4OyBiYWNrZ3JvdW5kOiB1cmwoJHt1cmx9KTsgYmFja2dyb3VuZC1zaXplOiAkeyh0aGlzLndpZHRoICogc2NhbGUpfXB4ICR7KHRoaXMuaGVpZ2h0ICogc2NhbGUpfXB4OyBjb2xvcjogdHJhbnNwYXJlbnQ7YCk7XG4gIH07XG5cbiAgaW1hZ2Uuc3JjID0gdXJsO1xuXG59XG5cblxuXG5cblxuZXhwb3J0IHsgaW1hZ2UgfTtcbiJdfQ==