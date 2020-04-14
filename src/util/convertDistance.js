export default function(distance=0){
  //N километров M метров
  const km = Math.floor(distance / 1000);
  const m = distance % 1000;
  let displayedDistance;
  if(km > 0){
    displayedDistance = km + ' километров ';
    if(m!==0){
      displayedDistance+= m + ' метров';
    }
  }else{
    displayedDistance = m + ' метров';
  }
  return displayedDistance
}