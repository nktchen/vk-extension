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
      )
    } else {
      alert("There are no active tabs")
    }
  })
})

let timerID = null;
let stopFlag = null;
const automationBtn = document.getElementById("automationButton");
automationBtn.addEventListener("click",() => {
  console.log("automation button clicked")
  if (!stopFlag){
    stopFlag = true;
    chrome.tabs.query({active: true}, (tabs) => {
      const tab = tabs[0];
      if (tab) {
        timerID = setInterval(() => {
          chrome.scripting.executeScript(
            {
              target:{tabId: tab.id, allFrames: true},
              func:replaceImages
            },
          )
        }, 3000)
      } else {
        alert("There are no active tabs")
      }
    })
  } else {
    stopFlag = false;
    clearInterval(timerID)

  }
})

/**
 * Функция исполняется на удаленной странице браузера,
 * получает аватарки и изменяет ссылки на аватарки на
 * картинки лейн
 *
 *  @return True
 */

function replaceImages() {
  // аватарки в профилях
  const avatarsProfiles = document.getElementsByClassName("vkuiImageBase__img");
  if (avatarsProfiles.length > 0) {
    for (let avatar of avatarsProfiles) {
      console.log('lainization profile avatars');
      avatar.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Serial_Experiments_Lain_DVD_vol_1.jpg/220px-Serial_Experiments_Lain_DVD_vol_1.jpg"
    }
  }
  // аватарки в сообщениях
  const avatarsMessages = document.getElementsByClassName("ReImage__img");
  if (avatarsMessages.length > 0) {
    for (let avatar of avatarsMessages) {
      console.log('lainization message avatars');
      avatar.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Serial_Experiments_Lain_DVD_vol_1.jpg/220px-Serial_Experiments_Lain_DVD_vol_1.jpg"
    }
  }
}
