export const setStrains = strains => ({
  type: 'SET_STRAINS',
  strains
});

export const setCategory = category => ({
  type: 'SET_CATEGORY',
  category
});

export const setUniqueStrain = strain => ({
  type: 'SET_UNIQUE',
  strain
});

export const addToMyStrains = strain => ({
  type: 'ADD_FAVORITE',
  strain
});

export const setUser = name => ({
  type: 'SET_USER',
  name
});

export const addToNotForMe = strain => ({
  type: 'SET_DISLIKE',
  strain
});

export const setEffects = effects => ({
  type: 'SET_EFFECTS',
  effects
});

export const setUniqueEffect = effect => ({
  type: 'SET_EFFECT',
  effect
});
