const actionBtn = document.getElementById("actionButton");
actionBtn.addEventListener("click",() => {
  chrome.tabs.query({active: true}, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      chrome.scripting.executeScript(
        {
          target:{tabId: tab.id, allFrames: true},
          func:replaceImages
        },
        onResult
      )
    } else {
      alert("There are no active tabs")
    }
  })
})

/**
 * Функция исполняется на удаленной странице браузера,
 * получает аватарки и изменяет ссылки на аватарки на
 * картинки лейн
 *
 *  @return True
 */

function replaceImages() {
  const avatars = document.getElementsByClassName("vkuiImageBase__img");
  for (let avatar of avatars) {
    console.log('lainization');
    avatar.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Serial_Experiments_Lain_DVD_vol_1.jpg/220px-Serial_Experiments_Lain_DVD_vol_1.jpg"
  }
}

function onResult(frames) {
  // TODO - Объединить списки URL-ов, полученных из каждого фрейма в один,
  // затем объединить их в строку, разделенную символом перевода строки
  // и скопировать в буфер обмена
}
