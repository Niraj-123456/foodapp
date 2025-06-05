export function trapFocus(element: HTMLElement) {
	const focusableElements = element.querySelectorAll(
		`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1])`
	) as NodeListOf<HTMLElement>;

	if (focusableElements.length === 0) return;

	const firstElement = focusableElements[0];

	const lastElement = focusableElements[focusableElements.length - 1];

	const handleTab = (e: KeyboardEvent) => {
		if (e.key !== 'Tab') return;

		if (e.shiftKey) {
			if (document.activeElement === firstElement) {
				lastElement.focus();
				e.preventDefault();
			}
		} else {
			if (document.activeElement === lastElement) {
				firstElement.focus();
				e.preventDefault();
			}
		}
	};

	element.addEventListener('keydown', handleTab);

	firstElement.focus();

	return {
		destroy() {
			element.removeEventListener('keydown', handleTab);
		}
	};
}
