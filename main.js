const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
const /** {NodeElement} */ $darkIcon = $themeBtn.querySelector(".dark");
const /** {NodeElement} */ $lightIcon = $themeBtn.querySelector(".light");

let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

// Функция для переключения темы
const changeTheme = () => {
    const newTheme = $HTML.dataset.theme === "light" ? "dark" : "light";
    $HTML.dataset.theme = newTheme;
    sessionStorage.setItem("theme", newTheme);

    // Переключаем иконки
    if (newTheme === "dark") {
        $darkIcon.style.display = "inline-block";
        $lightIcon.style.display = "none";
    } else {
        $darkIcon.style.display = "none";
        $lightIcon.style.display = "inline-block";
    }
}

// Инициализация состояния иконок при загрузке страницы
if ($HTML.dataset.theme === "dark") {
    $darkIcon.style.display = "inline-block";
    $lightIcon.style.display = "none";
} else {
    $darkIcon.style.display = "none";
    $lightIcon.style.display = "inline-block";
}

// Добавляем обработчик события для кнопки
$themeBtn.addEventListener("click", changeTheme);


  const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
  let /** {NodeElement} */ lastActiveTab = document.querySelectorAll("[data-tab-content]")[0];
  let /** {NodeElement} */ lastActiveTabBtn = $tabBtn[0];
  
  $tabBtn.forEach(item => {
      item.addEventListener("click", () => {
          lastActiveTab.classList.remove("active");
          lastActiveTabBtn.classList.remove("active");
  
          const /** {NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
  
          $tabContent.classList.add("active");
          item.classList.add("active");
  
          lastActiveTab = $tabContent;
          lastActiveTabBtn = item; 
      });
  });
  