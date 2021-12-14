
export const activeDisabled = (item, current) => {

    if (item > current) {
        return 'disabled'
    }

    if (item < current) {
        return ''
    }

    if (item === current) {
        return 'active'
    }
}
