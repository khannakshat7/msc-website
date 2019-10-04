function expand(i) {
  if (document.getElementById(i).classList.contains("face1")) {
  document.getElementById(i).classList.remove('face1');
  document.getElementById(i).classList.add('face1x');
  document.getElementById(i+"x").classList.remove('face2');
  document.getElementById(i+"x").classList.add('face2x');
  }
  else if (document.getElementById(i).classList.contains("face1x")) {
  document.getElementById(i).classList.remove('face1x');
  document.getElementById(i).classList.add('face1');
  document.getElementById(i+"x").classList.remove('face2x');
  document.getElementById(i+"x").classList.add('face2');
  }
  };
