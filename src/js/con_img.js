
function image(url, scale = 1) {

  let image = new Image();

  image.onload = () => {
    console.log("%c+", `font-size: 1px; padding: ${Math.floor((image.height * scale)/2)}px ${Math.floor((image.width * scale)/2)}px; line-height: ${image.height * scale}px; background: url(${url}); background-size: ${(this.width * scale)}px ${(this.height * scale)}px; color: transparent;`);
  };

  image.src = url;

}





export { image };
