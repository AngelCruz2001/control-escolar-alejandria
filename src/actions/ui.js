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

export const uiStartLoadingCards = () => ({
    type: types.uiStartLoadingCards,
});
export const uiFinishLoadingCards = () => ({
    type: types.uiFinishLoadingCards,
});

export const uiSetCurrent = (current) => ({
    type: types.uiSetCurrent,
    payload: current
})