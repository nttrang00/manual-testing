//kết hợp nhiều biến
var myArray1 = ['Diana','Rose','Lisa','Jack','Micheal']; var randomIndex1 = Math.floor(Math.random() * myArray1.length); var randomFirstName = myArray1[randomIndex1]; var myArray2 = ['Monroe','Page','Bolton','Miller','Nguyen']; var randomIndex2 = Math.floor(Math.random() * myArray2.length); var randomLastName = myArray2[randomIndex2]; return randomFirstName + ' ' + randomLastName;

//lấy các giá trị trong 1 mảng
// const productPlan = {
//     hc_hcvn_01: ['hc_hcvn_01_g1', 'hc_hcvn_01_g2', 'hc_hcvn_01_g3'],
//     hc_hcvn_02: ['hc_hcvn_02_g1', 'hc_hcvn_02_g2', 'hc_hcvn_02_g3'], 
// };
// const productCode = 'hc_hcvn_01';
// console.log(productPlan[productCode])

//lấy 1 giá trị bất kỳ
var productId = document.getElementById('product-id');
const productPlan = {
    35: ['hc_hcvn_01_g1', 'hc_hcvn_01_g2', 'hc_hcvn_01_g3'],
    49: ['hc_hcvn_02_g1', 'hc_hcvn_02_g2', 'hc_hcvn_02_g3'],
};

var myArray = productPlan[productId.value];
var randomIndex = Math.floor(Math.random() * myArray.length); var randomProductPlan = myArray[randomIndex];
console.log(randomProductPlan)


// Lấy ngày bất kỳ
var today = new Date();
var startTime = new Date(today.getFullYear()-60, today.getMonth(), today.getDate()+1);
var endTime = new Date(today.getFullYear()-18, today.getMonth(), today.getDate());
var randomDate = new Date(
    (startTime.getTime() > endTime.getTime()
      ? endTime.getTime()
      : startTime.getTime()) +
      Math.floor(
        (Math.random() * Math.abs(endTime - startTime)) / (1000 * 60 * 60 * 24)
      ) *
        (1000 * 60 * 60 * 24)
  );
  
  var newYear = randomDate.getFullYear();
  var newMonth = `0${randomDate.getMonth() + 1}`.slice(-2);
  var newDate = `0${randomDate.getDate()}`.slice(-2);
  var randomDate = `${newDate}/${newMonth}/${newYear}`;
  console.log(randomDate);

  //chọn 1 DOM bất kỳ
  var planDOM = document.querySelectorAll('.custom_pricing_table > thead > tr:first-child > th:nth-child(n+2)'); //'.custom_pricing_table > thead > tr:first-child > th:nth-child(n+2)' là các layer css. . class, # id
  planDOM[Math.floor(Math.random() * planDOM.length)].click();

  var planDOM = document.querySelectorAll('.custom_pricing_table > thead > tr:nth-child(3) > th:nth-child(n+2) > div > div > input');
  planDOM[Math.floor(Math.random() * planDOM.length)].click();

  var paymentDOM = document.querySelectorAll('#payment-methods > a > div > input');
  paymentDOM[Math.floor(Math.random() * paymentDOM.length)].click();
