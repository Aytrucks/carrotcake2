const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/download.jfif') {
    myImage.setAttribute('src','images/firefox2.jpg');
  } else {
    myImage.setAttribute('src','images/download.jfif');
  }
}
