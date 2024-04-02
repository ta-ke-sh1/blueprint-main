export const textShuffle = (sourceElement, content, interval, duration) => {
    if(sourceElement.isAnimating) return;
    sourceElement.isAnimating = true
    let iteration = 1;
    const letters = "0123456789abcdefghijklmnoupqrstuvxyz".toUpperCase();
    clearInterval(interval);
  
    if (sourceElement) {
      interval = setInterval(() => {
        sourceElement.innerText = content
          .split("")
          .map((letter, i) => {
            if (i < iteration) {
              if (!"!#$%^&*()_+-=<>?/".split("").includes(content[i])) {
                return content[i];
              }
              return content[i];
            }
  
            return letters[Math.floor(Math.random() * 35)];
          })
          .join("");
  
        if (iteration >= content.length) {
          clearInterval(interval);
          sourceElement.isAnimating = false
        }
  
        iteration += 1;
      }, duration);
    } else {
      return;
    }
  };