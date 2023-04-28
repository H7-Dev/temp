const button = document.querySelector('.btnTesteXMLHttpRequest');
button.addEventListener('click', () => {
    const value = button.getAttribute('data');
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', './MODEL/processa.php');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      alert(xhr.responseText);
    } else {
      console.error('Erro na requisição:', xhr.statusText);
    }
  };
  
  xhr.onerror = () => {
    console.error('Erro na requisição:', xhr.statusText);
  };
  
  xhr.send(`value=${value}`);
});
