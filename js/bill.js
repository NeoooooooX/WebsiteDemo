(function () {
  const money = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  });

  const getNum = (s) => {
    const txt = String(s).replace(/\u00A0/g, ' ').trim();
    const m = txt.match(/([0-9]+(?:\.[0-9]+)?)/);
    return m ? parseFloat(m[1]) : NaN;
  };

  const getDiscount = (el) => {
    if (!el) return 0;
    const m = el.textContent.match(/([0-9]+(?:\.[0-9]+)?)\s*%/);
    return m ? parseFloat(m[1]) / 100 : 0;
  };

  function compute(card) {
    const discountEl = document.querySelector('[data-discount]');
    const origEl     = card.querySelector('[data-orig]');
    const monthlyEl  = card.querySelector('[data-monthly]');
    const yearlyEl   = card.querySelector('[data-yearly]');
    if (!origEl || !monthlyEl || !yearlyEl) return;

    const discount = getDiscount(discountEl);
    const orig = getNum(origEl.textContent);
    if (Number.isNaN(orig)) return;

    const monthly = orig * (1 - discount);
    const yearly  = monthly * 12;

    const newMonthly = money.format(monthly);
    const newYearly  = money.format(yearly);

    // 去重：只有变化时才写，避免无意义 DOM 变更触发观察器
    if (monthlyEl.textContent !== newMonthly) monthlyEl.textContent = newMonthly;
    if (yearlyEl.textContent  !== newYearly ) yearlyEl.textContent  = newYearly;
  }

  function computeAll(root = document) {
    root.querySelectorAll('.v26-pricing-card-main').forEach(compute);
  }

  // 初次计算
  const init = () => computeAll();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 仅监听价格卡内部的改动，且更新时临时断开观察器，避免自触发
  const cardsRoot = document;
  const observer = new MutationObserver((mutations) => {
    // 只要有变更发生在某个价格卡内，就重算一次
    let touched = false;
    for (const m of mutations) {
      const inCard = (m.target.nodeType === 1 ? m.target : m.target.parentNode)
        ?.closest?.('.v26-pricing-container-new');
      if (inCard) { touched = true; break; }
    }
    if (!touched) return;

    observer.disconnect();
    // 用 rAF / 微队列批量化，减轻抖动
    requestAnimationFrame(() => {
      computeAll();
      observer.observe(cardsRoot, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: false
      });
    });
  });

  // 启动观察（仅需要在 DOM 就绪后）
  const startObserver = () => observer.observe(cardsRoot, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: false
  });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver, { once: true });
  } else {
    startObserver();
  }
})();