import { createSelector } from 'reselect'

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null),
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching,
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections // This changes it to a truthy/falsy value. In JS, an empty object is true. Therefore - if shop.collections is an object, true, else false!
)