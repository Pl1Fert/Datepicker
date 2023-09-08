export const getYearNumbers = (currentYear: number): number[] => {
    const years: number[] = [currentYear];

    for (let i = 1; i <= 4; i += 1) {
        years.push(currentYear - i);
        years.unshift(currentYear + i);
    }

    return years;
};
