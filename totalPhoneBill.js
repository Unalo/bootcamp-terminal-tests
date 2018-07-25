var phone = 'call, sms, call, sms, sms';

module.exports = function(phone) {
  //console.log(phone);
  var newPhone = phone.split(', ');
  var newCall = [];
  var newSms = [];
  for (var i=0;i<newPhone.length; i++) {
    if(newPhone[i].startsWith('c')) {
      newCall.push(newPhone[i]);
  } else {
    newSms.push(newPhone[i]);
  }
  }
 var newCallLength = newCall.length;
//console.log(newCallLength);
  var maths = newCallLength * (2.75);
  var newSmslength = newSms.length;
  var maths2 = newSmslength * (0.65);
  var total = maths + maths2;
 console.log('R' + total);
 return 'R'+total.toFixed(2);
 // return total;
  //console.log(total);
}
//totalPhoneBill('total');
