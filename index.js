

function quickSort(arr, left, right) {
  if (left < right) {
      var place = partition(arr, left, right);
      console.log(place);
      quickSort(arr, left, place - 1);
      quickSort(arr, place + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  var consultV = arr[left],
      index = left + 1,
      consultVIndex = left;
  for (var i = index; i <= right; i++) {
      if (arr[i] < consultV) {
          changeArrayItem(arr, i, index);
          index++;
      }
  }
  changeArrayItem(arr, consultVIndex, index - 1);
  return index - 1;
}

function changeArrayItem(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}


function shuffle(arr) {
  var length = arr.length,
      j = length;
  for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * (j--)); // 生成起始位置到基准位置之间的随机位置，并将基准从结束位置不停左移。
      // es3实现
      var newA = arr[i];
      arr[i] = arr[random];
      arr[random] = newA
      // es6 实现
      [arr[i], arr[random]] = [arr[random], arr[i]]; // 本质为交换元素位置。
  }
  return arr
}
