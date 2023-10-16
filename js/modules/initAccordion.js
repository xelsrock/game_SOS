const ruleItemsTitle = document.querySelectorAll('.rule__item-title');
const ruleItems = document.querySelectorAll('.rule__item');

export const initAccordion = () => {
  const handleAccordion = (title) => {
    title.addEventListener('click', () => {
      const titleId = title.getAttribute('data-tab');

      ruleItems.forEach((item) => {
        if (titleId === item.id) {
          item.classList.toggle('active');
        }
      });
    });
  };

  ruleItemsTitle.forEach(handleAccordion);
}