import { types } from '../types/types';

export const uiStartLoading = () => ({
    type: types.uiStartLoading,
});

export const uiStartLoadingCards = () => ({
    type: types.uiStartLoadingCards,
});
export const uiFinishLoadingCards = () => ({
    type: types.uiFinishLoadingCards,
});
export const uiFinishLoading = () => ({
    type: types.uiFinishLoading,
});
export const uiOpenDropMenu = () => ({
    type: types.uiOpenDropMenu,
});
export const uiCloseDropMenu = () => ({
    type: types.uiCloseDropMenu,
});
export const uiSetCorrect = (value) => ({
    type: types.uiSetCorrect,
    payload: value,
});

export const uiStartLoadingStudents =() => ({ 
    type:types.uiStartLoadingStudents
})

export const uiFinishLoadingStudents = () => ({ 
    type:types.uiFinishLoadingStudents
})