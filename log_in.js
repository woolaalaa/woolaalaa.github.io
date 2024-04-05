document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // 構造請求的數據
  var data = {
    'username': username,
    'password': password
  };

  fetch('https://script.google.com/macros/s/AKfycbwhFqd22TyW4j4QzDkAosOkNNbIrEFCYIWMnM44Mjwi1X22Cpq9b9Bq80_PQus7A7DSVw/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    // 將對象轉換為JSON字符串
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(text => alert(text))
  .catch(error => console.error('Error!', error.message));
});