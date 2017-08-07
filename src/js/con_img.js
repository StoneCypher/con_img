
// https://codepen.io/tigt/post/optimizing-svgs-in-data-uris

function svg_to_data_uri(svgString) {

  var uriPayload = encodeURIComponent(svgString.replace(/\n+/g, ''))   // remove newlines // encode URL-unsafe characters
                            .replace(/%20/g, ' ')  // put spaces back in
                            .replace(/%3D/g, '=')  // ditto equals signs
                            .replace(/%3A/g, ':')  // ditto colons
                            .replace(/%2F/g, '/'); // ditto slashes

  return `data:image/svg+xml,${uriPayload}`;

}





function image(url, scale = 1) {

  let image = new Image();

  image.onload = () => {
    console.log("%c+", `font-size: 1px; padding: ${Math.floor((image.height * scale)/2)}px ${Math.floor((image.width * scale)/2)}px; line-height: ${image.height * scale}px; background: url(${url}); background-size: ${(image.width * scale)}px ${(image.height * scale)}px; color: transparent;`);
  };

  image.src = url;

}





export { image, svg_to_data_uri };
