export const printPageArea = (printContent?: HTMLElement) => {
	if (printContent?.innerHTML) {
		const winPrint = window.open('', '', 'width=900,height=650')
		winPrint?.document.write(printContent?.innerHTML)
		winPrint?.document.close()
		winPrint?.focus()
		winPrint?.print()
	}
	// WinPrint.close()
}
