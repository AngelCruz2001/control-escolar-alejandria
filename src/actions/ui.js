import { types } from '../types/types'

export const uiStartLoading = () => ({
    type: types.uiStartLoading,
});
export const uiFinishLoading = () => ({
    type: types.uiFinishLoading,
})
export const uiSetCorrect = () => ({
    type: types.uiSetCorrect,
})

export const uiSetCurrent = (current) => ({
    type: types.uiSetCurrent,
    payload: current
})