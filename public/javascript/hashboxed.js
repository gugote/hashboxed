function changeTheme(){
  const themeSwitcher = document.querySelector('.switchBox');
  const html = document.querySelector('html');
  
  themeSwitcher.onclick = function switchTheme(){
    if (html.getAttribute('data-theme') == 'dark')  {
      html.setAttribute('data-theme', 'light');
      html.style.colorScheme = "light";
    } else {
      html.setAttribute('data-theme', 'dark')
      html.style.colorScheme = "dark";
    }
  }
}

function logoLink(){
  document.querySelector('.logo').addEventListener('click', function(){
    window.location.href = '/';
  })
}

changeTheme();
logoLink();