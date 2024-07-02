// cursorManager.ts

let cursorVisible = false;
let cursorElement: HTMLDivElement | null = null;

export function initializeCursor() {
  cursorElement = document.createElement('div');
  cursorElement.id = 'custom-cursor';
  cursorElement.style.position = 'fixed';
  cursorElement.style.width = '24px'; // largura do seu cursor
  cursorElement.style.height = '24px'; // altura do seu cursor
  cursorElement.style.backgroundImage = 'url(/path-to-custom-cursor.png)'; // imagem do cursor
  cursorElement.style.backgroundSize = 'cover';
  cursorElement.style.pointerEvents = 'none'; // para o cursor não bloquear os eventos do mouse
  cursorElement.style.zIndex = '9999'; // ajuste o z-index conforme necessário
  cursorElement.style.display = 'none'; // começa escondido

  document.body.appendChild(cursorElement);

  document.addEventListener('mousemove', (e) => {
    if (cursorElement && cursorVisible) {
      cursorElement.style.left = e.pageX + 'px';
      cursorElement.style.top = e.pageY + 'px';
    }
  });
}

export function showCustomCursor() {
  if (cursorElement) {
    cursorElement.style.display = 'block';
    cursorVisible = true;
    document.body.style.cursor = 'none'; // esconde o cursor original
  }
}

export function hideCustomCursor() {
  if (cursorElement) {
    cursorElement.style.display = 'none';
    cursorVisible = false;
    document.body.style.cursor = 'auto'; // mostra o cursor original
  }
}

export function isCursorVisible() {
  return cursorVisible;
}
