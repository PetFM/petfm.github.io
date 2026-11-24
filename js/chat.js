(function () {
  const chat = document.getElementById("chat");
  const yes = document.getElementById("yes");
  if (!chat || !yes) return;

  const items = [...chat.children];
  const summary = items[items.length - 1];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const BUBBLE_TIMES = [300, 1100, 1900, 2700, 3500];
  const ANSWER_TIME = 4600;
  const SUMMARY_TIME = 5400;
  const LOOP_TIME = 13000;

  function play() {
    items.forEach(el => el.classList.remove("show"));
    yes.classList.remove("on");

    if (reduceMotion) {
      items.forEach(el => el.classList.add("show"));
      yes.classList.add("on");
      return;
    }

    items.slice(0, BUBBLE_TIMES.length).forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), BUBBLE_TIMES[i]);
    });
    setTimeout(() => yes.classList.add("on"), ANSWER_TIME);
    setTimeout(() => summary.classList.add("show"), SUMMARY_TIME);
    setTimeout(play, LOOP_TIME);
  }

  play();
})();
