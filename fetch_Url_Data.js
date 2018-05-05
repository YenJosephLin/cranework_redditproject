var text = new XMLHttpRequest();
var L3Media = 3;
var L2Media = 2;
var L1Media = 1;
var i = 0;
var l = 0;
var R1Media = 25;
var R2Media = 24;
var R3Media = 23;
const textURL = "https://www.reddit.com/r/funny.json";
text.open("GET", textURL);
text.responseType = 'json';
text.send();
text.onload = function() {
  var textResponse = text.response;
  showData(textResponse);
};
setInterval(function() {
  text.open("GET", textURL);
  text.responseType = 'json';
  text.send();
  text.onload = function() {
    var textResponse = text.response;
    showData(textResponse);
  };
  if (i == 25) {
    i = 0;
  } else {
    i++;
  }
  if (L3Media == 25) {
    L3Media = 0;
  } else {
    L3Media++;
  }
  if (L2Media == 25) {
    L2Media = 0;
  } else {
    L2Media++;
  }
  if (L1Media == 25) {
    L1Media = 0;
  } else {
    L1Media++;
  }
  if (R1Media == 25) {
    R1Media = 0;
  } else {
    R1Media++;
  }
  if (R2Media == 25) {
    R2Media = 0;
  } else {
    R2Media++;
  }
  if (R3Media == 25) {
    R3Media = 0;
  } else {
    R3Media++;
  }
}, 10000);

function showData(jsonObj) {
  var data = jsonObj['data'];
  var k = 0;
  var dataChildren = data.children;
  var ImgUrl, VideoUrl, GifUrl;
  var ImgUrlR3, VideoUrlR3, GifUrlR3;
  var ImgUrlR2, VideoUrlR2, GifUrlR2;
  var ImgUrlR1, VideoUrlR1, GifUrlR1;
  var ImgUrlR3, VideoUrlR3, GifUrlR3;
  var ImgUrlR2, VideoUrlR2, GifUrlR2;
  var ImgUrlR1, VideoUrlR1, GifUrlR1;
  var dataChildrenData = dataChildren[i].data;
  var dataChildrenDataMedia = dataChildrenData.media;
  var dataChildrenDataPreview = dataChildrenData.preview;
  var dataChildrenDataPreviewImages = dataChildrenDataPreview.images[k];
  var dataChildrenDataPreviewImagesVariants = dataChildrenDataPreviewImages.variants;
  var DataAuthor = dataChildrenData.author;
  var DataTitle = dataChildrenData.title;
  /* Main Media */
  document.getElementById("mainElementText").innerHTML = '"' + DataTitle + '" -- ' + DataAuthor;
  if (dataChildrenDataPreviewImagesVariants.gif != undefined) {
    GifUrl = dataChildrenDataPreviewImagesVariants.gif.source.url;
    document.getElementById("mainElementMedia").innerHTML = '<img class="mainMediaSize" src="' + GifUrl + '">';
  } else if (dataChildrenDataMedia != null) {
    if (dataChildrenDataMedia.type == undefined) {
      VideoUrl = dataChildrenDataMedia.reddit_video.fallback_url;
      document.getElementById("mainElementMedia").innerHTML = '<video class="mainMediaSize" autoplay controls loop><source src="' + VideoUrl + '"></video>';
    }
  } else {
    ImgUrl = dataChildrenDataPreviewImages.source.url;
    document.getElementById("mainElementMedia").innerHTML = '<img class="mainMediaSize" src="' + ImgUrl + '">';
  }
  /* L3 Media */
  var dataChildrenDataL3 = dataChildren[L3Media].data;
  var dataChildrenDataL3Media = dataChildrenDataL3.media;
  var dataChildrenDataL3Preview = dataChildrenDataL3.preview;
  var dataChildrenDataL3PreviewImages = dataChildrenDataL3Preview.images[k];
  var dataChildrenDataL3PreviewImagesVariants = dataChildrenDataL3PreviewImages.variants;
  ImgUrlL3 = dataChildrenDataL3PreviewImages.source.url;
  document.getElementById("L3Media").innerHTML = '<img class="p3MediaSize" src="' + ImgUrlL3 + '">';
  /* L2 Media */
  var dataChildrenDataL2 = dataChildren[L2Media].data;
  var dataChildrenDataL2Media = dataChildrenDataL2.media;
  var dataChildrenDataL2Preview = dataChildrenDataL2.preview;
  var dataChildrenDataL2PreviewImages = dataChildrenDataL2Preview.images[k];
  var dataChildrenDataL2PreviewImagesVariants = dataChildrenDataL2PreviewImages.variants;
  ImgUrlL2 = dataChildrenDataL2PreviewImages.source.url;
  document.getElementById("L2Media").innerHTML = '<img class="p2MediaSize" src="' + ImgUrlL2 + '">';
  /* L1 Media */
  var dataChildrenDataL1 = dataChildren[L1Media].data;
  var dataChildrenDataL1Media = dataChildrenDataL1.media;
  var dataChildrenDataL1Preview = dataChildrenDataL1.preview;
  var dataChildrenDataL1PreviewImages = dataChildrenDataL1Preview.images[k];
  var dataChildrenDataL1PreviewImagesVariants = dataChildrenDataL1PreviewImages.variants;
  ImgUrlL1 = dataChildrenDataL1PreviewImages.source.url;
  document.getElementById("L1Media").innerHTML = '<img class="p1MediaSize" src="' + ImgUrlL1 + '">';
  /* R3 Media */
  var dataChildrenDataR3 = dataChildren[R3Media].data;
  var dataChildrenDataR3Media = dataChildrenDataR3.media;
  var dataChildrenDataR3Preview = dataChildrenDataR3.preview;
  var dataChildrenDataR3PreviewImages = dataChildrenDataR3Preview.images[k];
  var dataChildrenDataR3PreviewImagesVariants = dataChildrenDataR3PreviewImages.variants;
  ImgUrlR3 = dataChildrenDataR3PreviewImages.source.url;
  document.getElementById("R3Media").innerHTML = '<img class="p3MediaSize" src="' + ImgUrlR3 + '">';
  /* R2 Media */
  var dataChildrenDataR2 = dataChildren[R2Media].data;
  var dataChildrenDataR2Media = dataChildrenDataR2.media;
  var dataChildrenDataR2Preview = dataChildrenDataR2.preview;
  var dataChildrenDataR2PreviewImages = dataChildrenDataR2Preview.images[k];
  var dataChildrenDataR2PreviewImagesVariants = dataChildrenDataR2PreviewImages.variants;
  ImgUrlR2 = dataChildrenDataR2PreviewImages.source.url;
  document.getElementById("R2Media").innerHTML = '<img class="p2MediaSize" src="' + ImgUrlR2 + '">';
  /* R1 Media */
  var dataChildrenDataR1 = dataChildren[R1Media].data;
  var dataChildrenDataR1Media = dataChildrenDataR1.media;
  var dataChildrenDataR1Preview = dataChildrenDataR1.preview;
  var dataChildrenDataR1PreviewImages = dataChildrenDataR1Preview.images[k];
  var dataChildrenDataR1PreviewImagesVariants = dataChildrenDataR1PreviewImages.variants;
  ImgUrlR1 = dataChildrenDataR1PreviewImages.source.url;
  document.getElementById("R1Media").innerHTML = '<img class="p1MediaSize" src="' + ImgUrlR1 + '">';
  // document.getElementById("L3Value").innerHTML = L3Media;
  // document.getElementById("L2Value").innerHTML = L2Media;
  // document.getElementById("L1Value").innerHTML = L1Media;
  // document.getElementById("iValue").innerHTML = i;
  // document.getElementById("R1Value").innerHTML = R1Media;
  // document.getElementById("R2Value").innerHTML = R2Media;
  // document.getElementById("R3Value").innerHTML = R3Media;
}
