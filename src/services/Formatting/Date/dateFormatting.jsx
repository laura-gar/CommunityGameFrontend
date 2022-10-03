
export const formatStringDate = (dateTxt) => {
    if (!dateTxt) {
        return '';
    }
    const date = new Date(dateTxt);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}