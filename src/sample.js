import 'intersection-observer';

const threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
const round = n => Math.round(n * 100);

// オプション
// 今回`root`を指定していないため、viewportがルートになる
const option = {
  threshold
};
const observer = new IntersectionObserver(
  changes => {
    for (const change of changes) {
      // ターゲット要素（交差した要素）
      const target = change.target;
      // 0.0と1.0の間の値として、ルートの交差比率（指定の要素がどれぐらい表示されているか）
      const ratio = change.intersectionRatio;
      target.textContent = `${round(ratio)}%`;
    }
  },
  { threshold }
);

const targets = document.querySelectorAll('div');
for (const target of targets) {
  observer.observe(target);
}
